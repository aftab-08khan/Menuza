"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, "users", res.user.uid));
      const role = userDoc.data().role;

      if (role === "admin") router.push("/dashboard");
      if (role === "cashier") router.push("/dashboard/pos");
      if (role === "kitchen") router.push("/dashboard/kitchen");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 space-y-4">
        <h1 className="text-2xl font-bold">Restaurant Login</h1>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <div className=" relative">
          <Input
            type={!isActive ? "password" : "text"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className=" cursor-pointer absolute top-2 right-3"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <IoEyeOffOutline /> : <IoEyeOffSharp />}
          </div>
        </div>
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
