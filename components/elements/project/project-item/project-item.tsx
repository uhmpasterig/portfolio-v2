'use client';
import { getImageUrl } from '@/lib/utils';
import { GridItem } from '@/components/layout/grid';
import type { Project } from '@/sanity/schemas';
import { ProjectItemTitle, ProjectItemDescription, ProjectItemRecentCommit, ProjectItemFooter } from './';

export type ProjectItemProps = {} & Project;

export const ProjectItem = ({ title, description, image, link, githubUrl, tags }: ProjectItemProps) => {
  const imageUrl = getImageUrl(image);

  return (
    <GridItem className="col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-5 flex flex-col gap-1 justify-between">
      <ProjectItemTitle imageUrl={imageUrl} title={title} tags={tags} />
      <ProjectItemDescription description={description} />
      <div className="flex flex-col gap-1 w-full">
        <ProjectItemRecentCommit />
        <ProjectItemFooter link={link} githubUrl={githubUrl} />
      </div>
    </GridItem>
  );
};

ProjectItem.Placeholder = () => {
  return (
    <GridItem className="col-span-full md:col-span-6 lg:col-span-4 row-span-1 p-5 flex flex-col gap-2">
      <ProjectItemTitle.Placeholder />
      <ProjectItemDescription.Placeholder />
      <ProjectItemRecentCommit.Placeholder />
      <ProjectItemFooter.Placeholder />
    </GridItem>
  );
};
