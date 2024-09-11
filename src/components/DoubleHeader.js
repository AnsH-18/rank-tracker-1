import Link from "next/link";

export default function DoubleHeader({preTitle,mainTitle,preTitleLink}) {
  return (
    <div>
      {preTitleLink && (
        <Link
          href={preTitleLink}
          className="block text-gray-300 text-lg uppercase"
        >
          {preTitle}
        </Link>
      )}
      {!preTitleLink && (
        <h2 className="font-bold text-3xl ">{preTitle}</h2>
      )}
    </div>
  );
}