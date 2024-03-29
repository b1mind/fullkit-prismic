// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
	/**
	 * policy field in *Footer*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: Policy ONLY
	 * - **API ID Path**: footer.policy
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	policy: prismic.LinkField
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<FooterDocumentData>,
	'footer',
	Lang
>

type HomePageDocumentDataSlicesSlice = AntiHeroSlice | CardSlice | HeroSlice

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
	/**
	 * title field in *Home Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField

	/**
	 * Slice Zone field in *Home Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *Home Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: home_page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField

	/**
	 * Meta Image field in *Home Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>

	/**
	 * Meta Title field in *Home Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: home_page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<HomePageDocumentData>,
	'home_page',
	Lang
>

/**
 * Item in *Navigation → nav*
 */
export interface NavigationDocumentDataNavItem {
	/**
	 * link field in *Navigation → nav*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField

	/**
	 * label field in *Navigation → nav*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
	/**
	 * nav field in *Navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav: prismic.GroupField<Simplify<NavigationDocumentDataNavItem>>
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavigationDocumentData>,
	'navigation',
	Lang
>

type PageDocumentDataSlicesSlice =
	| RichTextSlice
	| CardSlice
	| AntiHeroSlice
	| MarkDownSlice
	| TestimonialsSlice
	| FeaturesSlice
	| HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
	/**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
	/**
	 * siteName field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.siteName
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	siteName: prismic.KeyTextField
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>

type SliceHomeDocumentDataSlicesSlice =
	| HeroSlice
	| AntiHeroSlice
	| RichTextSlice
	| CardSlice
	| MarkDownSlice

/**
 * Content for SliceHome documents
 */
interface SliceHomeDocumentData {
	/**
	 * text field in *SliceHome*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: sliceHome.text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * title field in *SliceHome*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: sliceHome.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField

	/**
	 * Slice Zone field in *SliceHome*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: sliceHome.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SliceHomeDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *SliceHome*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: sliceHome.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField

	/**
	 * Meta Image field in *SliceHome*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: sliceHome.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>

	/**
	 * Meta Title field in *SliceHome*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: sliceHome.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField
}

/**
 * SliceHome document from Prismic
 *
 * - **API ID**: `sliceHome`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SliceHomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<SliceHomeDocumentData>,
	'sliceHome',
	Lang
>

type SlicePageDocumentDataSlicesSlice =
	| CardSlice
	| RichTextSlice
	| AntiHeroSlice
	| HeroSlice
	| MarkDownSlice
	| PageHeadingSlice
	| FeaturesSlice

/**
 * Content for SlicePage documents
 */
interface SlicePageDocumentData {
	/**
	 * Title field in *SlicePage*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: slicePage.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField

	/**
	 * Slice Zone field in *SlicePage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: slicePage.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SlicePageDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *SlicePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: slicePage.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField

	/**
	 * Meta Image field in *SlicePage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: slicePage.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>

	/**
	 * Meta Title field in *SlicePage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: slicePage.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField
}

/**
 * SlicePage document from Prismic
 *
 * - **API ID**: `slicePage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SlicePageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<SlicePageDocumentData>,
	'slicePage',
	Lang
>

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
	/**
	 * person field in *Testimonial*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonial.person
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	person: prismic.KeyTextField

	/**
	 * title field in *Testimonial*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonial.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField

	/**
	 * avatar field in *Testimonial*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonial.avatar
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	avatar: prismic.ImageField<never>

	/**
	 * text field in *Testimonial*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonial.text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<TestimonialDocumentData>,
	'testimonial',
	Lang
>

export type AllDocumentTypes =
	| FooterDocument
	| HomePageDocument
	| NavigationDocument
	| PageDocument
	| SettingsDocument
	| SliceHomeDocument
	| SlicePageDocument
	| TestimonialDocument

/**
 * Primary content in *AntiHero → Primary*
 */
export interface AntiHeroSliceDefaultPrimary {
	/**
	 * heading(optional) field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: h2 or label
	 * - **API ID Path**: anti_hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField

	/**
	 * text field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * text2 field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: optional
	 * - **API ID Path**: anti_hero.primary.text2
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text2: prismic.RichTextField

	/**
	 * button field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: optional
	 * - **API ID Path**: anti_hero.primary.button
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button: prismic.LinkField

	/**
	 * button text field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: optional
	 * - **API ID Path**: anti_hero.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField

	/**
	 * button type field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: anti_hero.primary.button_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	button_type: prismic.SelectField<'primary' | 'secondary', 'filled'>

	/**
	 * image (optional) field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Default variation for AntiHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AntiHeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AntiHeroSliceDefaultPrimary>,
	never
>

/**
 * Primary content in *AntiHero → Primary*
 */
export interface AntiHeroSlicePFullPrimary {
	/**
	 * heading(optional) field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: h2 or label
	 * - **API ID Path**: anti_hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField

	/**
	 * text field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * text2 field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.text2
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text2: prismic.RichTextField

	/**
	 * button field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.button
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button: prismic.LinkField

	/**
	 * button text field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField

	/**
	 * button type field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: anti_hero.primary.button_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	button_type: prismic.SelectField<'primary' | 'secondary', 'filled'>

	/**
	 * image(optional) field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: anti_hero.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>

	/**
	 * bg color field in *AntiHero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: anti_hero.primary.bg_color
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	bg_color: prismic.SelectField<'primary' | 'secondary' | 'primary-alt' | 'secondary-alt', 'filled'>
}

/**
 * Full Width variation for AntiHero Slice
 *
 * - **API ID**: `pFull`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AntiHeroSlicePFull = prismic.SharedSliceVariation<
	'pFull',
	Simplify<AntiHeroSlicePFullPrimary>,
	never
>

/**
 * Slice variation for *AntiHero*
 */
type AntiHeroSliceVariation = AntiHeroSliceDefault | AntiHeroSlicePFull

/**
 * AntiHero Shared Slice
 *
 * - **API ID**: `anti_hero`
 * - **Description**: AntiHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AntiHeroSlice = prismic.SharedSlice<'anti_hero', AntiHeroSliceVariation>

/**
 * Primary content in *TextImage → Primary*
 */
export interface CardSliceDefaultPrimary {
	/**
	 * text field in *TextImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * image field in *TextImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Default variation for TextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CardSliceDefaultPrimary>,
	never
>

/**
 * Primary content in *TextImage → Primary*
 */
export interface CardSlicePImageLeftPrimary {
	/**
	 * image field in *TextImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>

	/**
	 * text field in *TextImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField
}

/**
 * Image Left variation for TextImage Slice
 *
 * - **API ID**: `pImageLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlicePImageLeft = prismic.SharedSliceVariation<
	'pImageLeft',
	Simplify<CardSlicePImageLeftPrimary>,
	never
>

/**
 * Primary content in *TextImage → Primary*
 */
export interface CardSlicePFullPrimary {
	/**
	 * text field in *TextImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * image field in *TextImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * full variation for TextImage Slice
 *
 * - **API ID**: `pFull`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlicePFull = prismic.SharedSliceVariation<
	'pFull',
	Simplify<CardSlicePFullPrimary>,
	never
>

/**
 * Primary content in *TextImage → Primary*
 */
export interface CardSlicePFullImageLeftPrimary {
	/**
	 * text field in *TextImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * image field in *TextImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Full Image Left variation for TextImage Slice
 *
 * - **API ID**: `pFullImageLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlicePFullImageLeft = prismic.SharedSliceVariation<
	'pFullImageLeft',
	Simplify<CardSlicePFullImageLeftPrimary>,
	never
>

/**
 * Slice variation for *TextImage*
 */
type CardSliceVariation =
	| CardSliceDefault
	| CardSlicePImageLeft
	| CardSlicePFull
	| CardSlicePFullImageLeft

/**
 * TextImage Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: Card
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlice = prismic.SharedSlice<'card', CardSliceVariation>

/**
 * Primary content in *Features → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
	/**
	 * heading field in *Features → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField
}

/**
 * Primary content in *Features → Items*
 */
export interface FeaturesSliceDefaultItem {
	/**
	 * icons field in *Features → Items*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: house
	 * - **API ID Path**: features.items[].icons
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	icons: prismic.SelectField<'house' | 'person' | 'building', 'filled'>

	/**
	 * title field in *Features → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField

	/**
	 * text field in *Features → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<FeaturesSliceDefaultPrimary>,
	Simplify<FeaturesSliceDefaultItem>
>

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<'features', FeaturesSliceVariation>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * mustache field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: optional
	 * - **API ID Path**: hero.primary.text2
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text2: prismic.RichTextField

	/**
	 * heading field in *Hero → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: !one per page
	 * - **API ID Path**: hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField

	/**
	 * text field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * button field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: optional
	 * - **API ID Path**: hero.primary.button
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button: prismic.LinkField

	/**
	 * button text field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: optional
	 * - **API ID Path**: hero.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField

	/**
	 * button type field in *Hero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: hero.primary.button_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	button_type: prismic.SelectField<'primary' | 'secondary', 'filled'>

	/**
	 * image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSlicePFullPrimary {
	/**
	 * heading field in *Hero → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: !one per page
	 * - **API ID Path**: hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField

	/**
	 * text field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * mustache field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: optional
	 * - **API ID Path**: hero.primary.text2
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text2: prismic.RichTextField

	/**
	 * button field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button: prismic.LinkField

	/**
	 * button text field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField

	/**
	 * button type field in *Hero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: hero.primary.button_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	button_type: prismic.SelectField<'primary' | 'secondary', 'filled'>

	/**
	 * image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Full Width variation for Hero Slice
 *
 * - **API ID**: `pFull`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlicePFull = prismic.SharedSliceVariation<
	'pFull',
	Simplify<HeroSlicePFullPrimary>,
	never
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSlicePSplitPrimary {
	/**
	 * heading field in *Hero → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: !one per page
	 * - **API ID Path**: hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField

	/**
	 * text field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField

	/**
	 * mustache field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text2
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text2: prismic.RichTextField

	/**
	 * button field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button: prismic.LinkField

	/**
	 * button text field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button_text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_text: prismic.KeyTextField

	/**
	 * button type field in *Hero → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: primary
	 * - **API ID Path**: hero.primary.button_type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	button_type: prismic.SelectField<'primary' | 'secondary', 'filled'>

	/**
	 * image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>
}

/**
 * Split variation for Hero Slice
 *
 * - **API ID**: `pSplit`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlicePSplit = prismic.SharedSliceVariation<
	'pSplit',
	Simplify<HeroSlicePSplitPrimary>,
	never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSlicePFull | HeroSlicePSplit

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>

/**
 * Primary content in *MarkDown → Primary*
 */
export interface MarkDownSliceDefaultPrimary {
	/**
	 * content field in *MarkDown → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: mark_down.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField
}

/**
 * Default variation for MarkDown Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MarkDownSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MarkDownSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *MarkDown*
 */
type MarkDownSliceVariation = MarkDownSliceDefault

/**
 * MarkDown Shared Slice
 *
 * - **API ID**: `mark_down`
 * - **Description**: MarkDown
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MarkDownSlice = prismic.SharedSlice<'mark_down', MarkDownSliceVariation>

/**
 * Primary content in *PageHeading → Primary*
 */
export interface PageHeadingSliceDefaultPrimary {
	/**
	 * heading field in *PageHeading → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Heading1
	 * - **API ID Path**: page_heading.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField
}

/**
 * Default variation for PageHeading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageHeadingSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<PageHeadingSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *PageHeading*
 */
type PageHeadingSliceVariation = PageHeadingSliceDefault

/**
 * PageHeading Shared Slice
 *
 * - **API ID**: `page_heading`
 * - **Description**: PageHeading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageHeadingSlice = prismic.SharedSlice<'page_heading', PageHeadingSliceVariation>

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
	/**
	 * heading field in *Testimonials → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField
}

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceDefaultItem {
	/**
	 * testimonial field in *Testimonials → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.items[].testimonial
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	testimonial: prismic.ContentRelationshipField<'testimonial'>
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TestimonialsSliceDefaultPrimary>,
	Simplify<TestimonialsSliceDefaultItem>
>

/**
 * Primary content in *Testimonials → Primary*
 */
export interface TestimonialsSliceZPopoutPrimary {
	/**
	 * heading field in *Testimonials → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField
}

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceZPopoutItem {
	/**
	 * testimonial field in *Testimonials → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.items[].testimonial
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	testimonial: prismic.ContentRelationshipField<'testimonial'>
}

/**
 * zPopout variation for Testimonials Slice
 *
 * - **API ID**: `zPopout`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceZPopout = prismic.SharedSliceVariation<
	'zPopout',
	Simplify<TestimonialsSliceZPopoutPrimary>,
	Simplify<TestimonialsSliceZPopoutItem>
>

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault | TestimonialsSliceZPopout

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<'testimonials', TestimonialsSliceVariation>

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>
	}

	namespace Content {
		export type {
			FooterDocument,
			FooterDocumentData,
			HomePageDocument,
			HomePageDocumentData,
			HomePageDocumentDataSlicesSlice,
			NavigationDocument,
			NavigationDocumentData,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SliceHomeDocument,
			SliceHomeDocumentData,
			SliceHomeDocumentDataSlicesSlice,
			SlicePageDocument,
			SlicePageDocumentData,
			SlicePageDocumentDataSlicesSlice,
			TestimonialDocument,
			TestimonialDocumentData,
			AllDocumentTypes,
			AntiHeroSlice,
			AntiHeroSliceDefaultPrimary,
			AntiHeroSlicePFullPrimary,
			AntiHeroSliceVariation,
			AntiHeroSliceDefault,
			AntiHeroSlicePFull,
			CardSlice,
			CardSliceDefaultPrimary,
			CardSlicePImageLeftPrimary,
			CardSlicePFullPrimary,
			CardSlicePFullImageLeftPrimary,
			CardSliceVariation,
			CardSliceDefault,
			CardSlicePImageLeft,
			CardSlicePFull,
			CardSlicePFullImageLeft,
			FeaturesSlice,
			FeaturesSliceDefaultPrimary,
			FeaturesSliceDefaultItem,
			FeaturesSliceVariation,
			FeaturesSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSlicePFullPrimary,
			HeroSlicePSplitPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HeroSlicePFull,
			HeroSlicePSplit,
			MarkDownSlice,
			MarkDownSliceDefaultPrimary,
			MarkDownSliceVariation,
			MarkDownSliceDefault,
			PageHeadingSlice,
			PageHeadingSliceDefaultPrimary,
			PageHeadingSliceVariation,
			PageHeadingSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			TestimonialsSlice,
			TestimonialsSliceDefaultPrimary,
			TestimonialsSliceDefaultItem,
			TestimonialsSliceZPopoutPrimary,
			TestimonialsSliceZPopoutItem,
			TestimonialsSliceVariation,
			TestimonialsSliceDefault,
			TestimonialsSliceZPopout
		}
	}
}
