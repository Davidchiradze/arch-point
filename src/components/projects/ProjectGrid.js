import styled from "styled-components";
import { colors, spacing, typography, media } from "../../theme";

export const ProjectsSection = styled.section`
  background: ${colors.backgroundLight};
  padding: ${spacing["4xl"]} 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xl};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing["4xl"]};
`;

export const SectionTitle = styled.h2`
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};

  ${media.sm} {
    font-size: ${typography.fontSize["4xl"]};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const TitleIcon = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(
    to right,
    ${colors.primary},
    ${colors.primaryLight}
  );
  margin: 0 auto ${spacing.lg};
  border-radius: 2px;
`;

export const LoadMoreButton = styled.button`
  background: transparent;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: ${spacing.lg} ${spacing["2xl"]};
  border-radius: 30px;
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${spacing["2xl"]} auto 0;
  display: block;

  &:hover {
    background: ${colors.primary};
    color: ${colors.background};
    transform: translateY(-2px);
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
