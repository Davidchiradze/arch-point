import styled from "styled-components";
import { colors, spacing, typography, media } from "../../theme";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: all 0.8s ease;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${colors.background};
  max-width: 800px;
  padding: 0 ${spacing.lg};
`;

export const HeroTitle = styled.h1`
  font-size: ${typography.fontSize["4xl"]};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing.lg};
  animation: fadeInUp 0.8s ease-out;

  ${media.sm} {
    font-size: ${typography.fontSize["5xl"]};
  }

  ${media.lg} {
    font-size: ${typography.fontSize["6xl"]};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.normal};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing["2xl"]};
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  ${media.sm} {
    font-size: ${typography.fontSize.xl};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.lg};

  ${media.sm} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const HeroButton = styled.button`
  padding: ${spacing.lg} ${spacing["2xl"]};
  border-radius: 30px;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 200px;

  ${(props) =>
    props.variant === "primary" &&
    `
    background: ${colors.primary};
    color: ${colors.background};
    
    &:hover {
      background: ${colors.primaryDark};
      transform: translateY(-2px);
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background: transparent;
    color: ${colors.background};
    border: 2px solid ${colors.background};
    
    &:hover {
      background: ${colors.background};
      color: ${colors.text};
    }
  `}
`;

export const NavigationArrows = styled.div`
  position: absolute;
  bottom: ${spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${spacing.lg};
  z-index: 3;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;
