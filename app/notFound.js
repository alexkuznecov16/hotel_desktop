import Link from 'next/link';
import React from 'react';

export default function notFound() {
	return (
		<div>
			Page is not found. <Link href={'/'}>Return back.</Link>
		</div>
	);
}
