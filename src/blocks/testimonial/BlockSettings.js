import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, PanelBody, PanelRow} from "@wordpress/components";
import colors from "../../commons/colors";
import {ColorPicker} from "@wordpress/components";

export default function BlockSettings({attributes, setAttributes}) {


	return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					<h4>Quote Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={backgroundColor => setAttributes({backgroundColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Quote Text Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPicker
						colors={colors}
						onChange={textColor => setAttributes({textColor})}
						enableAlpha
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
