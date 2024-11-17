import { useAtomValue } from "jotai";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { Img } from "@src/elements";
import NoProfilePictureIcon from "@src/assets/icons/no-profile-picture512.png";
import { userAtom } from "@src/atoms";
import { meService as meStorageService } from "@src/firebase/storage/services";
import { LoginLink } from "./LoginLink";
import { SignOutButton } from "./SignOutButton";

const Container = styled.div`
  position: relative;
  width: 32px !important;
  height: 32px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.softerWhite};
  overflow: hidden;
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  position: fixed;
  top: 48px;
  right: 32px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  > * {
    display: block;
    height: 2rem;
    width: 5rem !important;
    background-color: ${({ theme }) => theme.colors.softerWhite};
  }

  > *:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  > *:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const ProfileDropdownMenu = () => {
  const user = useAtomValue(userAtom);
  const [src, setSrc] = useState<string>(NoProfilePictureIcon);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    async function fetchProfilePic() {
      let url = "";
      if (user && user.profilePicStoragePath)
        url = await meStorageService.getDownloadURL(user.profilePicStoragePath);
      setSrc(url);
    }
    fetchProfilePic();
  }, [user]);

  useEffect(() => {
    setShowContent(false);
  }, [user]);

  const onClick = (event: React.MouseEvent<HTMLImageElement, Event>) => {
    setShowContent(!showContent);
  };

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setSrc(NoProfilePictureIcon);
  };
  return (
    <Container>
      <StyledImg
        src={src}
        alt="User Profile Picture"
        onError={onError}
        onClick={onClick}
      />
      {showContent && (
        <Content>{user ? <SignOutButton /> : <LoginLink />}</Content>
      )}
    </Container>
  );
};
