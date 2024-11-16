import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "@src/firebase/storage";

type Path = string;

export abstract class BaseService<SubPaths> {
  protected _basePath: string = "";
  private cachedDownloadURLs: Record<Path, { url: string; expiry: Date }> = {};

  public get basePath() {
    return this.getBasePath();
  }

  getBasePath() {
    return this._basePath;
  }

  public set basePath(basePath: string) {
    if (!(basePath.length > 1)) {
      throw new Error("basePath have to be at least 2 characters long");
    } else if (!basePath.endsWith("/")) {
      throw new Error("basePath must end with a '/'");
    }
    this._basePath = basePath;
  }

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async uploadFile(file: File, subPath?: SubPaths) {
    const path = `${this.basePath}${subPath}${uuidv4()}-${file.name}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return path;
  }

  async getDownloadURL(path: string) {
    const now = new Date();

    // Check if the URL is cached
    if (this.cachedDownloadURLs[path]) {
      const { url: cachedURL, expiry } = this.cachedDownloadURLs[path];
      if (expiry > now) {
        // console.log("Returning cached URL");
        return cachedURL;
      }
    }

    // Check if the URL is stored in localStorage
    const { url: localStorageURL, expiry: localStorageExpiry } = JSON.parse(
      localStorage.getItem(path) ?? "{}"
    ) as Partial<{ url: string; expiry: string }>;
    if (
      localStorageURL &&
      localStorageExpiry &&
      new Date(localStorageExpiry) > now
    ) {
      this.cachedDownloadURLs[path] = {
        url: localStorageURL,
        expiry: new Date(localStorageExpiry),
      };
      // console.log("Returning localStorage URL");
      return localStorageURL;
    }

    // Fetch the URL from Firebase Storage
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    const expiry = new Date(now.getTime() + 1000 * 60 * 5);
    const data = { url, expiry };
    this.cachedDownloadURLs[path] = data;
    localStorage.setItem(path, JSON.stringify(data));
    return url;
  }
}
