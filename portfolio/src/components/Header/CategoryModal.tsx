// components/Header/HeaderModal.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ModalContainer, ModalContent, MenuItem } from './Header.styles';

const HeaderModal: React.FC = () => {
  const router = useRouter();
  const [reverse, setReverse] = useState(false);

  const handleSkillClick = () => {
    setReverse(true);
    setTimeout(() => {
      router.push('/Skills');
    }, 1000); // 애니메이션 시간을 설정합니다. 현재 1초로 설정되어 있습니다.
  };

  return (
    <ModalContainer>
      <ModalContent reverse={reverse}>
        <MenuItem delay="0s" reverse={reverse} onClick={handleSkillClick}>
          Skills
        </MenuItem>
        <MenuItem delay="0s" reverse={reverse} onClick={handleSkillClick}>
          about
        </MenuItem>
        <MenuItem delay="0s" reverse={reverse} onClick={handleSkillClick}>
          projects
        </MenuItem>
        <MenuItem delay="0s" reverse={reverse} onClick={handleSkillClick}>
          contact
        </MenuItem>
        {/* 다른 MenuItem들 */}
      </ModalContent>
    </ModalContainer>
  );
};

export default HeaderModal;
