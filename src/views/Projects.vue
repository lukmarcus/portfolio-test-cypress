<template>
  <PageHeader title="Projects"
    >In-depth Case Studies to show you what I can offer and how I
    work</PageHeader
  >
  <section class="section pt-5">
    <div class="container">
      <ProjectsGrid :projects="projects" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PageHeader, ProjectsGrid } from "@/components";
import { useProjects } from "@/composables";

const { projects } = useProjects();
</script>
