import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const SkeletonLoading = (props) => (
  <ContentLoader
    speed={1}
    width={500}
    height={900}
    viewBox="10 47 400 100"
    backgroundColor="#bebaba"
    foregroundColor="#d4d4d4"
    {...props}
  >
    {/*Skeleton do titulo da categoria*/}
    <Rect x="10" y="50" rx="10" ry="10" width="220" height="25" />
    {/* Skeleton das imagens  */}
    <Rect x="10" y="90" rx="10" ry="10" width="135" height="160" />
    <Rect x="150" y="90" rx="10" ry="10" width="135" height="160" />
    <Rect x="290" y="90" rx="10" ry="10" width="30" height="160" />

    {/*Skeleton do titulo da categoria*/}
    <Rect x="10" y="270" rx="10" ry="10" width="220" height="25" />
    {/* Skeleton das imagens  */}
    <Rect x="10" y="310" rx="10" ry="10" width="135" height="160" />
    <Rect x="150" y="310" rx="10" ry="10" width="135" height="160" />
    <Rect x="290" y="310" rx="10" ry="10" width="30" height="160" />
    {/*Skeleton do titulo da categoria*/}
    <Rect x="10" y="490" rx="10" ry="10" width="220" height="25" />
    {/* Skeleton das imagens  */}
    <Rect x="10" y="530" rx="10" ry="10" width="135" height="160" />
    <Rect x="150" y="530" rx="10" ry="10" width="135" height="160" />
    <Rect x="290" y="530" rx="10" ry="10" width="30" height="160" />
  </ContentLoader>
);

export default SkeletonLoading;
