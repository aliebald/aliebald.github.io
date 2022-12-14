import fs from "fs";
import { createCanvas, loadImage, CanvasRenderingContext2D } from "canvas";
import type { Badge } from "./badges";

/**
 * Generates an preview image for open graph.
 *
 * @param filename url-save filename for final png.
 * @param title Title for image
 * @param description Description for image
 * @param badges List of badges that should be added to the image.
 * @param forceGeneration If false, the image is only generated if it does not yet exist.
 * @param width optional, image width. Default: 1280.
 * @param height optional, image height. Default: 640.
 * @returns path to generated image within public folder.
 */
export default async function generateOGImage(
	filename: string,
	title: string,
	description: string,
	badges?: Badge[],
	forceGeneration: boolean = process.env.NODE_ENV === "production",
	width = 1280,
	height = 640
) {
	const finalPath = `images/open-graph/generated/${filename}.png`;
	const relativePath = `./public/${finalPath}`;

	if (!forceGeneration && fs.existsSync(relativePath)) {
		console.log(`Skip generating Open Graph image for ${filename} - ${finalPath}. File already exists`);
		return finalPath;
	}

	console.log(`Generating Open Graph Image for ${filename} - ${finalPath}`);

	const bgImage = await loadImage("util/og-background.png");
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext("2d");

	ctx.drawImage(bgImage, 0, 0);

	ctx.fillStyle = "#C1C2C5";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";

	// Determine title size
	let titleSize = 65;
	ctx.font = `bold ${titleSize}px "Segoe UI"`;
	let titleWidth = ctx.measureText(title).width;

	// Adjust size if too small / large
	if (titleWidth < width / 2) {
		let titleSize = 75;
		ctx.font = `bold ${titleSize}px "Segoe UI"`;
	}
	while (titleWidth > width - 80) {
		titleSize -= 2;
		ctx.font = `bold ${titleSize}px "Segoe UI"`;
		titleWidth = ctx.measureText(title).width;
	}

	// Draw text
	ctx.fillText(title, width / 2, 150);

	// Draw description
	ctx.font = '28px "Segoe UI"';
	const descriptionLines = splitIntoLines(ctx, description, width - 80);
	const descriptionHeight = 450 - (descriptionLines.length * 45) / 2;
	descriptionLines.forEach((line, i) => ctx.fillText(line, width / 2, descriptionHeight + i * 45));

	// Draw badges
	if (badges) {
		drawBadges(ctx, width / 2, 260, badges);
	}

	// Save image
	const buffer = canvas.toBuffer("image/png");
	fs.writeFileSync(relativePath, buffer);
	return finalPath;
}

function splitIntoLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
	const lines = [];
	const words = text.split(" ");
	let currentLine = words[0];

	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const width = ctx.measureText(currentLine + " " + word).width;

		if (width >= maxWidth) {
			lines.push(currentLine);
			currentLine = word;
			continue;
		}

		currentLine += " " + word;
	}
	lines.push(currentLine);
	return lines;
}

function drawBadges(ctx: CanvasRenderingContext2D, x: number, y: number, badges: Badge[]) {
	const text = badges.map((b) => b.title).join("  -  ");
	ctx.fillText(text, x, y);
}
