import styled from "styled-components";
import { colors, spacing, typography, media } from "../../theme";

export const ContactSection = styled.section`
  padding: ${spacing["4xl"]} 0;
  background: ${colors.background};
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing["3xl"]};

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
`;

export const ContactTitle = styled.h2`
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.lg};
  padding: ${spacing.lg};
  background: ${colors.backgroundLight};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.shadow};
  }
`;

export const ContactIcon = styled.div`
  font-size: ${typography.fontSize["2xl"]};
  min-width: 40px;
  text-align: center;
`;

export const ContactText = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text};
  line-height: 1.5;
`;

export const ContactDescription = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.textLight};
  margin-top: ${spacing.sm};
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  margin-top: ${spacing.xl};
`;

export const SocialTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.md};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.md} ${spacing.lg};
  background: ${colors.backgroundLight};
  border-radius: 8px;
  text-decoration: none;
  color: ${colors.text};
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: ${colors.primary}10;
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

export const SocialIcon = styled.span`
  font-size: ${typography.fontSize.lg};
`;

export const SocialName = styled.span`
  font-weight: ${typography.fontWeight.medium};
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-top: ${spacing.xl};

  ${media.sm} {
    flex-direction: row;
  }
`;

export const ActionButton = styled.button`
  padding: ${spacing.lg} ${spacing["2xl"]};
  border-radius: 30px;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};

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
    props.variant === "outline" &&
    `
    background: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    
    &:hover {
      background: ${colors.primary};
      color: ${colors.background};
    }
  `}
`;

export const ContactMap = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px ${colors.shadow};

  ${media.lg} {
    height: 500px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};

  ${media.sm} {
    padding: 0 ${spacing.xl};
  }

  ${media.lg} {
    padding: 0 ${spacing["2xl"]};
  }
`;
