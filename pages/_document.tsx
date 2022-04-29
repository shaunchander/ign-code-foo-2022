import Document, { Html, Head, Main, NextScript } from 'next/document'

class SyncoreNextDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default SyncoreNextDocument
