import { UserService } from "./UserService";

export class MeService extends UserService {}

/**
 * Authprovider should set the targetUserId before calling any methods.
 */
export const meService = new MeService();
