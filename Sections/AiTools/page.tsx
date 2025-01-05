"use client";
import Page from '@/app/aiTools/page';
import React from 'react'
  interface SearchParams {
  search?: string;
  isFav?: string;
  page?: string;
}
export default function AiToolPage() {
const searchParams: SearchParams = {
    search: "",
    isFav: "false",
    page: "1",
  };
  return (
  <>
  <Page searchParams={searchParams}/>
  </>
  )
}
