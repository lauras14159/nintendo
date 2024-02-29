import Link from "next/link";

export default function WarningText() {
  return (
    <div className="md:text-xs text-[10px] text-[#484848] gap-y-10 md:max-w-5xl mx-auto py-10 px-5 lg:px-0 ">
      <p>
        WARNING: If you have epilepsy or have had seizures or other unusual
        reactions to flashing lights or patterns, consult a doctor before
        playing video games. All users should read the Health and Safety
        Information available in the system settings before using this software.
      </p>

      <p className="py-3">
        Nintendo Switch Online membership (sold separately) and Nintendo Account
        required for online play. Not available in all countries. Internet
        access required for online features. Terms apply.
        <Link href={"/switch/online/"}>nintendo.com/switch-online</Link>
      </p>

      <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
    </div>
  );
}
