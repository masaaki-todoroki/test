(function () {
	const el = wp.element.createElement,
			blocks = wp.blocks,
			RichText = wp.editor.RichText,
			InnerBlocks = wp.editor.InnerBlocks;

	const { createBlock } = wp.blocks;
	
	blocks.registerBlockType('aoitheme/h2', {
		title: '見出しH2',
		icon: 'editor-textcolor',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
			type: 'array',
			source: 'children',
			selector: 'h2',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3-bg' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3-bg' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'h2',
				className: 'c-heading c-heading--lv2',
				value: nowContent,
				onChange: function (changedContent) {
				props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
			tagName: 'h2',
			className: 'c-heading c-heading--lv2',
			value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/h3', {
		title: '見出しH3',
		icon: 'editor-textcolor',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'h3',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3-bg' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'h3',
				className: "c-heading c-heading--lv3",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'h3',
				className: "c-heading c-heading--lv3",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/h3-bg', {
		title: '強調見出し',
		icon: 'editor-textcolor',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'h3',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h4' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h4', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'h3',
				className: "c-heading c-heading--lv3-bg",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'h3',
				className: "c-heading c-heading--lv3-bg",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/h4', {
		title: '見出しH4',
		icon: 'editor-textcolor',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'h4',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3-bg' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/h2' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h2', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/h3-bg' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/h3-bg', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'h4',
				className: "c-heading c-heading--lv4",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'h4',
				className: "c-heading c-heading--lv4",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/p-left', {
		title: '本文左寄せ',
		icon: 'edit',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-center' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-center', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-right' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-right', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-center' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-center', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-right' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-right', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'p',
				className: "c-paragraph c-paragraph--left",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'p',
				className: "c-paragraph c-paragraph--left",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/p-center', {
		title: '本文中央寄せ',
		icon: 'edit',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-left' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-left', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-right' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-right', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-left' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-left', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-right' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-right', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'p',
				className: "c-paragraph c-paragraph--center",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'p',
				className: "c-paragraph c-paragraph--center",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/p-right', {
		title: '本文右寄せ',
		icon: 'edit',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-left' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-left', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-center' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-center', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/p-left' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-left', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/p-center' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/p-center', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'p',
				className: "c-paragraph c-paragraph--right",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'p',
				className: "c-paragraph c-paragraph--right",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/postscript', {
		title: '追記',
		icon: 'edit',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		supports: {
			className: false,
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'p',
					className: "c-paragraph c-paragraph--postscript",
					value: nowContent,
					onChange: function (changedContent) {
						props.setAttributes({ content: changedContent });
					},
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'p',
				className: "c-paragraph c-paragraph--postscript",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/link-block-self', {
		title: '同窓リンク段落',
		icon: 'external',
		category: 'aoi-div',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'div',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/link-block-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-block-blank', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/link-block-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-block-blank', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'div',
				className: "c-link-block c-link-block--self",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'div',
				className: "c-link-block c-link-block--self",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/link-block-blank', {
		title: '別窓リンク段落',
		icon: 'external',
		category: 'aoi-div',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'div',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/link-block-self' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-block-self', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/link-block-self' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-block-self', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'div',
				className: "c-link-block c-link-block--blank",
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'div',
				className: "c-link-block c-link-block--blank",
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/hr', {
		title: '水平線',
		icon: 'editor-insertmore',
		category: 'aoi-layout',
		supports: {
			className: false,
		},
		edit: function () {
			return el(
				'hr',
				{
					className: "c-hr",
				}
			);
		},
		save: function () {
			return el(
				'hr',
				{
					className: "c-hr",
				}
			);
		},
	});

	blocks.registerBlockType('aoitheme/box-bg-white-heading', {
		title: '囲みテキスト：背景白&見出しあり',
		icon: 'editor-kitchensink',
		category: 'aoi-div',
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit(attributes, className) {
			const allowedBlocks = [ 'aoitheme/box-heading', 'aoitheme/p-left', 'aoitheme/p-center', 'aoitheme/p-right', 'aoitheme/unmarked-list', 'aoitheme/nakaguro-list', 'aoitheme/order-list', 'aoitheme/alpha-list', 'aoitheme/note-list', 'aoitheme/link-list', 'aoitheme/link-list-blank', 'aoitheme/link-list-pdf', 'core/image' ];
			return wp.element.createElement("div", {
				className: 'c-box c-box--heading'
			}, el(InnerBlocks, {
				allowedBlocks: allowedBlocks,
				templateLock: false
			}));
		},
		save({
			className
		}) {
			return wp.element.createElement("div", {
				className: 'c-box c-box--heading'
			}, el(InnerBlocks.Content, null));
		},
	});

	blocks.registerBlockType('aoitheme/box-bg-white', {
		title: '囲みテキスト：背景白&見出しなし',
		icon: 'editor-kitchensink',
		category: 'aoi-div',
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit(attributes, className) {
			const allowedBlocks = [ 'aoitheme/p-left', 'aoitheme/p-center', 'aoitheme/p-right', 'aoitheme/unmarked-list', 'aoitheme/nakaguro-list', 'aoitheme/order-list', 'aoitheme/alpha-list', 'aoitheme/note-list', 'aoitheme/link-list', 'aoitheme/link-list-blank', 'aoitheme/link-list-pdf', 'core/image' ];
			return wp.element.createElement("div", {
				className: 'c-box'
			}, el(InnerBlocks, {
				allowedBlocks: allowedBlocks,
				templateLock: false
			}));
		},
		save({
			className
		}) {
			return wp.element.createElement("div", {
				className: 'c-box'
			}, el(InnerBlocks.Content, null));
		},
	});

	blocks.registerBlockType('aoitheme/box-bg-gray-heading', {
		title: '囲みテキスト：背景グレー&見出しあり',
		icon: 'editor-kitchensink',
		category: 'aoi-div',
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit(attributes, className) {
			const allowedBlocks = [ 'aoitheme/box-heading', 'aoitheme/p-left', 'aoitheme/p-center', 'aoitheme/p-right', 'aoitheme/unmarked-list', 'aoitheme/nakaguro-list', 'aoitheme/order-list', 'aoitheme/alpha-list', 'aoitheme/note-list', 'aoitheme/link-list', 'aoitheme/link-list-blank', 'aoitheme/link-list-pdf', 'core/image' ];
			return wp.element.createElement("div", {
				className: 'c-box c-box--bg c-box--heading'
			}, el(InnerBlocks, {
				allowedBlocks: allowedBlocks,
				templateLock: false
			}));
		},
		save({
			className
		}) {
			return wp.element.createElement("div", {
				className: 'c-box c-box--bg c-box--heading'
			}, el(InnerBlocks.Content, null));
		},
	});

	blocks.registerBlockType('aoitheme/box-bg-gray', {
		title: '囲みテキスト：背景グレー&見出しなし',
		icon: 'editor-kitchensink',
		category: 'aoi-div',
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white-heading' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white-heading', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-white' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-white', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/box-bg-gray' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/box-bg-gray-heading', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit(attributes, className) {
			const allowedBlocks = [ 'aoitheme/p-left', 'aoitheme/p-center', 'aoitheme/p-right', 'aoitheme/unmarked-list', 'aoitheme/nakaguro-list', 'aoitheme/order-list', 'aoitheme/alpha-list', 'aoitheme/note-list', 'aoitheme/link-list', 'aoitheme/link-list-blank', 'aoitheme/link-list-pdf', 'core/image' ];
			return wp.element.createElement("div", {
				className: 'c-box c-box--bg'
			}, el(InnerBlocks, {
				allowedBlocks: allowedBlocks,
				templateLock: false
			}));
		},
		save({
			className
		}) {
			return wp.element.createElement("div", {
				className: 'c-box c-box--bg'
			}, el(InnerBlocks.Content, null));
		},
	});

	blocks.registerBlockType('aoitheme/box-heading', {
		title: '囲みテキスト専用見出し',
		icon: 'editor-textcolor',
		category: 'aoi-heading-and-paragraph',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'div',
			},
		},
		supports: {
			className: false,
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'div',
				className: 'c-box__heading',
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'div',
				className: 'c-box__heading',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/unmarked-list', {
		title: '無印リスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/nakaguro-list', {
		title: '中黒リスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list c-list--disc',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list c-list--disc',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/order-list', {
		title: '順序リスト',
		icon: 'editor-ol',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ol',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ol',
					multiline: 'li',
					className: 'c-list c-list--decimal',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ol',
				className: 'c-list c-list--decimal',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/alpha-list', {
		title: 'アルファベットリスト',
		icon: 'editor-ol',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ol',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ol',
					multiline: 'li',
					className: 'c-list c-list--alpha',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ol',
				className: 'c-list c-list--alpha',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/note-list', {
		title: '注釈リスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list c-list--note',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list c-list--note',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/link-list', {
		title: 'サイト内リンクリスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-blank', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list c-list--link',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list c-list--link',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/link-list-blank', {
		title: '外部リンクリスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-pdf' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list-pdf', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list c-list--link c-list--link-blank',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list c-list--link c-list--link-blank',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/link-list-pdf', {
		title: 'PDFリンクリスト',
		icon: 'editor-ul',
		category: 'aoi-list',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		supports: {
			className: false,
		},
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'aoitheme/unmarked-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/unmarked-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/nakaguro-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/nakaguro-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/order-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/order-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/alpha-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/alpha-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/note-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/note-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
				{
					type: 'block',
					blocks: [ 'aoitheme/link-list-blank' ],
					transform: function( attributes ) {
						return createBlock( 'aoitheme/link-list', {
							content: attributes.content,
						} );
					},
				},
			],
		},
		edit: function (props) {
			var content = props.attributes.content;
			return el(
				RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: 'c-list c-list--link c-list--link-pdf',
					value: content,
					onChange: function (newContent) {
						props.setAttributes({ content: newContent });
					}
				}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'ul',
				className: 'c-list c-list--link c-list--link-pdf',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/table-caption-left', {
		title: 'テーブルキャプション左側',
		icon: 'editor-textcolor',
		category: 'aoi-layout',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'div',
			},
		},
		supports: {
			className: false,
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'div',
				className: 'c-table-caption c-table-caption--left',
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'div',
				className: 'c-table-caption c-table-caption--left',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/table-caption-right', {
		title: 'テーブルキャプション右側',
		icon: 'editor-textcolor',
		category: 'aoi-layout',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'div',
			},
		},
		supports: {
			className: false,
		},
		edit: function (props) {
			var nowContent = props.attributes.content;
			return el(
			RichText,
			{
				tagName: 'div',
				className: 'c-table-caption c-table-caption--right',
				value: nowContent,
				onChange: function (changedContent) {
					props.setAttributes({ content: changedContent });
				},
			}
			);
		},
		save: function (props) {
			return el(RichText.Content, {
				tagName: 'div',
				className: 'c-table-caption c-table-caption--right',
				value: props.attributes.content,
			});
		},
	});

	blocks.registerBlockType('aoitheme/clearfix', {
		title: '回りこみ終了',
		icon: 'editor-break',
		category: 'aoi-layout',
		edit: function () {
			return el(
			'div',
				{
					className: "clearfix",
				},
			);
		},
		save: function (props) {
			return el(
			'div',
				{
					className: "clearfix",
				},
			);
		},
	});
})();
