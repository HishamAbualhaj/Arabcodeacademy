"use client";
import Page from '@/app/aiTools/page';
import React from 'react'
  interface SearchParams {
  search?: string;
  isFav?: string;
  page?: string;
}
export default function AiToolPage() {

  return (
  <>
  <Page searchParams={searchParams}/>
  </>
  )
}
