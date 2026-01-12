import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import Image from "next/image";
import { Info } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32">
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-yellow-400">Donate</h1>
        </div>
      </div>
      <section className="flex w-[90vw] flex-col gap-6 sm:max-w-[65vw] sm:flex-row sm:space-x-8">
        <Card className="m-2 flex-1 bg-gray-800 text-center text-white shadow-lg">
          <CardHeader>
            <CardTitle>
              <h2 className="mb-4 text-4xl font-semibold text-yellow-400">
                Online Donations
              </h2>
            </CardTitle>
            <CardDescription className="mx-auto max-w-[80%] text-xl font-semibold text-white">
              Make a secure online donation through the Brooklyn Tech Alumni
              Foundation.
            </CardDescription>
          </CardHeader>
          <CardContent className="mx-auto flex flex-col items-center justify-center space-y-4 sm:max-w-[80%]">
            <ol className="list-inside list-decimal space-y-3">
              <li>
                Visit{" "}
                <a
                  href="https://bthsalumni.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  bthsalumni.org/donate
                </a>
              </li>
              <li>
                Select <b>"Robotics"</b> from the <b>"Designation"</b> dropdown
                menu.
              </li>
            </ol>
            <Image
              src="/donate-designation.png"
              alt="Selecting 'Robotics' from the Designation dropdown"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <ol start={3} className="list-inside list-decimal space-y-3">
              <li>
                Under the <b>"Leave a comment"</b> section, write{" "}
                <b>"FTC Robotics Team"</b>.
              </li>
            </ol>
            <Image
              src="/donate-comment.png"
              alt="Writing 'FTC Robotics Team' in the Leave a comment section"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
          </CardContent>
        </Card>
        <Card className="mx-2 flex-1 bg-gray-800 text-center text-white shadow-lg">
          <CardHeader>
            <CardTitle>
              <h2 className="mb-4 text-4xl font-semibold text-yellow-400">
                Mail-in Donations
              </h2>
            </CardTitle>
            <CardDescription className="mx-auto max-w-[80%] text-xl font-semibold text-white">
              Send your contribution via a check to the Brooklyn Tech Alumni
              Foundation.
            </CardDescription>
          </CardHeader>
          <CardContent className="mx-auto flex flex-col items-center justify-center space-y-4 sm:max-w-[85%]">
            <p>
              Please make checks payable to{" "}
              <b>"Brooklyn Tech Alumni Foundation"</b> with{" "}
              <b>"FTC Robotics Team"</b> in the memo line, and mail to:
            </p>
            <address className="text-center not-italic">
              Brooklyn Tech Alumni Foundation
              <br />
              Attn: FTC Robotics Team
              <br />
              P.O. Box 26608
              <br />
              Brooklyn, NY 11202-6608
            </address>
            <Alert className="mx-2 flex-1 bg-gray-800 px-2 text-left text-white shadow-lg">
              <Info />
              <AlertTitle className="font-bold">Tax Information</AlertTitle>
              <AlertDescription>
                The Brooklyn Tech Alumni Foundation is a 501(c)(3) nonprofit
                organization, with tax ID 11-2739496. All donations are tax
                deductible and a W-9 form can be provided on request.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
