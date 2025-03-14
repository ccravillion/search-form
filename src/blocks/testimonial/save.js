/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';
import StarRating from "../../components/StarRating.scss";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	// build the stars
	// let stars = '';
	// for(let i = 0; i < attributes.stars; i++){
	// 	stars += '*';
	// }
	/**
	 *
	 * @type CSSProperties
	 */
	const divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}

	return (
		<div { ...useBlockProps.save() } >
			<StarRating rating={attributes.stars} />
			{/*<div className="stars">*/}

			{/*</div>*/}
			<RichText.Content
				tagName="div"
				className="quote"
				value={attributes.quote} />
			<div className="quote-profile">
				<div className="photo">
					<img src={attributes.avatarUrl} alt={"Photo of " + attributes.author} />
				</div>
				<div className="text">
					<p className="author">{attributes.author}</p>
					<p className="location">Point Place, WI</p>
				</div>
			</div>
		</div>
	);
}
