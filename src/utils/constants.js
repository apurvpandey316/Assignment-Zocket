export const breakTextIntoLines = (text, maxCharsPerLine,maxWord) => {
    const lines = [];
    let currentLine = '';
    let reachedMaxLength = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char === ' ' && currentLine.length > 0) {
        if (currentLine.length + 1 <= maxCharsPerLine) {
          currentLine += ' ';
        } else {
          lines.push(currentLine);
          currentLine = '';
        }
      } else {
        if (!reachedMaxLength) {
          currentLine += char;
        }
      }

      if (currentLine.length === maxCharsPerLine) {
        lines.push(currentLine);
        currentLine = '';
      }

      if (i >= (maxWord)) {
        if (currentLine.length > 0) {
          lines.push(currentLine.slice(0, maxWord));
          reachedMaxLength = true;
        }
        break;
      }
    }

    if (currentLine.length > 0 && !reachedMaxLength) {
      lines.push(currentLine);
    }

    return lines;
  };


export const drawRect=(x, y, width, height, radius,bgColor,ctx)=> {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.stroke();
}