"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import React from "react";
import FrontendQuestions from "./Frontend-Questions";

function page() {
  return (
    <div className="flex flex-col justify-center align-middle items-start md:px-32 gap-10 overflow-clip text-white  py-28">
      <Tabs defaultValue="account" className="text-white">
        <TabsList className="">
          <TabsTrigger value="account">Frontend Questions</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <FrontendQuestions />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
