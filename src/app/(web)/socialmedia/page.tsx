import React from "react";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import GradientButton from "@/components/GradientButton";
import Link from "next/link";
import { socialmediaContent } from "./content";

export default function SocialMediaPage() {
  const pageData = socialmediaContent;

  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />

      {pageData.discord && (
        <ContentSection title="Discord">
          <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-300 font-semibold">
                  {pageData.discord.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.discord.description}
                </p>
              </div>
              <Link href={pageData.discord.link} target="_blank">
                <GradientButton variant="secondary">
                  Join Discord
                </GradientButton>
              </Link>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.github && (
        <ContentSection title="GitHub">
          <div className="p-4 bg-gray-500/10 border border-gray-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-300 font-semibold">
                  {pageData.github.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.github.description}
                </p>
              </div>
              <Link href={pageData.github.link} target="_blank">
                <GradientButton>Visit GitHub</GradientButton>
              </Link>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.linkedin && (
        <ContentSection title="LinkedIn">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-blue-300 font-semibold">
                  {pageData.linkedin.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.linkedin.description}
                </p>
              </div>

              <GradientButton variant="secondary" disabled>
                Coming Soon
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.twitter && (
        <ContentSection title="Twitter/X">
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-cyan-300 font-semibold">
                  {pageData.twitter.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.twitter.description}
                </p>
              </div>

              <GradientButton variant="secondary" disabled>
                Coming Soon
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.youtube && (
        <ContentSection title="YouTube">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-red-300 font-semibold">
                  {pageData.youtube.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.youtube.description}
                </p>
              </div>
              <GradientButton variant="secondary" disabled>
                Coming Soon
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.reddit && (
        <ContentSection title="Reddit">
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-orange-300 font-semibold">
                  {pageData.reddit.handle}
                </h3>
                <p className="text-gray-300 text-sm">
                  {pageData.reddit.description}
                </p>
              </div>
              <GradientButton variant="secondary" disabled>
                Coming Soon
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}

      {pageData.engagementGuidelines && (
        <ContentSection title={pageData.engagementGuidelines.title}>
          <p className="text-gray-300">
            {pageData.engagementGuidelines.description}
          </p>
        </ContentSection>
      )}
    </div>
  );
}
