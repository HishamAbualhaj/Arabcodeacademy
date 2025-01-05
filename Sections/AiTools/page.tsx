"use client";
import Page from '@/app/aiTools/page';
import React from 'react'

export default function AiToolPage() {
  const SearchParams {
  search?: string;
  isFav?: string;
  page?: string;
}
  return (
  <>
  <Page searchParams={searchParams}/>
  </>
  )
}
