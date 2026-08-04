export type AuthHeaderProps = {
  title: string;
  subTitle: string;
};

export default function Header({ title, subTitle }: AuthHeaderProps) {
  return (
    <div>
      <div
        className="
        text-2xl font-display
         font-semibold
         tracking-tight
         text-center
          text-gray-900"
      >
        {title}
      </div>

      <div className="text-sm text-gray-500 mt-2 text-center">{subTitle}</div>
    </div>
  );
}
