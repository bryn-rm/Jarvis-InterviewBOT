export function InterviewHUD() {
  return (
    <div className="panel p-3 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-300">Interviewer Persona</p>
        <p className="text-cyan-300 font-semibold">Senior Engineer · SWE Backend</p>
      </div>
      <div className="text-right">
        <p className="text-xs">Time Remaining</p>
        <p className="text-2xl font-code text-amber-300">44:59</p>
      </div>
    </div>
  );
}
