import React from "react";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import GradientButton from "@/components/GradientButton";
import { communityContent } from "./content";
import Link from "next/link";

export default function CommunityPage() {
  const pageData = communityContent
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      {pageData.discord && (
        <ContentSection title={pageData.discord.title}>
          <p className="text-gray-300 mb-4">{pageData.discord.description}</p>
          <Link href={pageData.discord.link} target="_blank" rel="noopener noreferrer">
            <GradientButton>
              Join Discord
            </GradientButton>
          </Link>
        </ContentSection>
      )}
      {pageData.upskilling && (
        <ContentSection title={pageData.upskilling.title}>
          <p className="text-gray-300">{pageData.upskilling.description}</p>
        </ContentSection>
      )}
      {pageData.events && (
        <ContentSection title={pageData.events.title}>
          <p className="text-gray-300">{pageData.events.description}</p>
        </ContentSection>
      )}
      {pageData.upskilling && (
        <ContentSection title={pageData.upskilling.title}>
          <p className="text-gray-300">{pageData.upskilling.description}</p>
        </ContentSection>
      )}
        {pageData.events && ( 
        <ContentSection title={pageData.events.title}>
          <p className="text-gray-300">{pageData.events.description}</p>
        </ContentSection>
      )}
      {pageData.collaboration && (
        <ContentSection title={pageData.collaboration.title}>
          <p className="text-gray-300 mb-4">{pageData.collaboration.description}</p>
          <p className="text-gray-300">{pageData.collaboration.entrepreneurial}</p>
        </ContentSection>
      )}
    </div>
  );
}
