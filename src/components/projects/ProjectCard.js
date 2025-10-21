import styled from "styled-components";
import { colors, spacing, typography } from "../../theme";

export const ProjectCard = styled.div`
  background: ${colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px ${colors.shadowDark};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  padding: ${spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.background};
`;

export const ProjectTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
  line-height: 1.3;
`;

export const ProjectSize = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.primary};
  background: ${colors.primary}15;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 20px;
  text-align: center;
  margin-top: auto;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectActions = styled.div`
  position: absolute;
  bottom: ${spacing.lg};
  left: ${spacing.lg};
  right: ${spacing.lg};
  display: flex;
  gap: ${spacing.sm};
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 25px;
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;
