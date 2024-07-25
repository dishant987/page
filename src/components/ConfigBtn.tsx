import { ConfettiButton } from "@/components/magicui/confetti";

export function ConfettiBtn({title}:{title:String}) {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360;
          },
        }}
      >
        {title}
      </ConfettiButton>
    </div>
  );
}
