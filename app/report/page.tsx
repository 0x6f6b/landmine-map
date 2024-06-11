import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, MailIcon } from "lucide-react";
import MineForm from "@/components/mine-form";

export default function ReportLandmine() {
  return (
    <>
      <Button variant="link" asChild>
        <Link href="/">← Home</Link>
      </Button>
      <div className="w-full max-w-4xl mx-auto py-12 md:py-20 flex flex-col items-center">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Report a suspected landmine location
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            If you think you&apos;ve found a landmine, please use the form below
            to report it to us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 w-1/2">
          <div className="space-y-4">
            <MineForm />
          </div>
        </div>
      </div>
    </>
  );
}
