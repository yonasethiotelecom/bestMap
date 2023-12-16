import Key from "./key";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section >
			<div >
				{children}
                <Key/> 
			</div>
		</section>
	);
}
