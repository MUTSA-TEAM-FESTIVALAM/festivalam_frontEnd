import React, { createContext, useState } from "react";

const userContext = createContext({
    user: { kakaoId : "", name: "", email: "", like: "", 
    post:"", 
    reply: "",
    logined : false,
    accesstoken : "" },
    setUser: () => {}
});

export default userContext;
