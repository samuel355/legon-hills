"use client";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
import { Building, Building2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import UserListing from "./_components/UserListing";
import { supabase } from "@/utils/supabase/client";
import Header from "./_components/Header";

const Profile = () => {
  return (
    <>
      <div className="my-1 w-full px-10 pt-[7.5rem]">
        <h2 className="font-bold text-2xl mb-5 ml-1">Profile</h2>
        <UserProfile routing="hash">
          {/* <UserButton.UserProfilePage
            label="My Listing"
            labelIcon={<Building2 className="h-4 w-4" />}
            url="my-listing"
          >
            <UserListing />
          </UserButton.UserProfilePage> */}
        </UserProfile>
      </div>
    </>
  );
};

export default Profile;
