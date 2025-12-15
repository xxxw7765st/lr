import{l as e}from"./vue-core.pXvEpkFbBugaeRd0NdsdF.js";var t=Object.create,n=Object.getPrototypeOf,r=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(e,o,s)=>{s=e==null?{}:t(n(e));let c=o||!e||!e.__esModule?r(s,`default`,{value:e,enumerable:!0}):s;for(let t of i(e))a.call(c,t)||r(c,t,{get:()=>e[t],enumerable:!0});return c},s=((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports))((e,t)=>{var n,r,i,a,o,s,c,l;function u(e){e<.5&&(e=.5);var t=Math.exp(.726*.726)/e,u=Math.exp(-t),d=Math.exp(-2*t),f=(1-u)*(1-u)/(1+2*t*u-d);return n=f,r=f*(t-1)*u,i=f*(t+1)*u,a=-f*d,o=2*u,s=-d,c=(n+r)/(1-o-s),l=(i+a)/(1-o-s),new Float32Array([n,r,i,a,o,s,c,l])}function d(e,t,n,r,i,a){var o,s,c,l,u,d,f,p,m,h,g,_,v,y;for(m=0;m<a;m++){for(d=m*i,f=m,p=0,o=e[d],u=o*r[6],l=u,g=r[0],_=r[1],v=r[4],y=r[5],h=0;h<i;h++)s=e[d],c=s*g+o*_+l*v+u*y,u=l,l=c,o=s,n[p]=l,p++,d++;for(d--,p--,f+=a*(i-1),o=e[d],u=o*r[7],l=u,s=o,g=r[2],_=r[3],h=i-1;h>=0;h--)c=s*g+o*_+l*v+u*y,u=l,l=c,o=s,s=e[d],t[f]=n[p]+l,d--,p--,f-=a}}function f(e,t,n,r){if(r){var i=new Uint16Array(e.length),a=new Float32Array(Math.max(t,n)),o=u(r);d(e,i,a,o,t,n,r),d(i,e,a,o,n,t,r)}}t.exports=f}),c=class{raw;width;height;constructor(e,t,n){this.raw=e,this.width=t,this.height=n}toImageData(){return new ImageData(this.raw,this.width,this.height)}toImageBitmap(){return createImageBitmap(this.toImageData())}toCanvas(){let e=document.createElement(`canvas`);e.width=this.width,e.height=this.height;let t=e.getContext(`2d`);if(!t)throw Error(`Picsquish error: no canvas 2D context`);return t.putImageData(this.toImageData(),0,0),e}toBlob(e){let t=new OffscreenCanvas(this.width,this.height),n=t.getContext(`2d`);if(!n)throw Error(`Picsquish error: no canvas 2D context`);return n.putImageData(this.toImageData(),0,0),t.convertToBlob(e)}},l=4;function u(e,t,n){let r=new Uint8ClampedArray(n.tile);for(let i=0;i<n.toHeight;i++){let a=i*n.toWidth*l,o=((n.toY+i)*t+n.toX)*l;e.set(r.subarray(a,a+n.toWidth*l),o)}}var d=new Blob([`
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/glur/mono16.js
var require_mono16 = __commonJS((exports, module) => {
  var a0;
  var a1;
  var a2;
  var a3;
  var b1;
  var b2;
  var left_corner;
  var right_corner;
  function gaussCoef(sigma) {
    if (sigma < 0.5) {
      sigma = 0.5;
    }
    var a = Math.exp(0.726 * 0.726) / sigma, g1 = Math.exp(-a), g2 = Math.exp(-2 * a), k = (1 - g1) * (1 - g1) / (1 + 2 * a * g1 - g2);
    a0 = k;
    a1 = k * (a - 1) * g1;
    a2 = k * (a + 1) * g1;
    a3 = -k * g2;
    b1 = 2 * g1;
    b2 = -g2;
    left_corner = (a0 + a1) / (1 - b1 - b2);
    right_corner = (a2 + a3) / (1 - b1 - b2);
    return new Float32Array([a0, a1, a2, a3, b1, b2, left_corner, right_corner]);
  }
  function convolveMono16(src, out, line, coeff, width, height) {
    var prev_src, curr_src, curr_out, prev_out, prev_prev_out;
    var src_index, out_index, line_index;
    var i, j;
    var coeff_a0, coeff_a1, coeff_b1, coeff_b2;
    for (i = 0;i < height; i++) {
      src_index = i * width;
      out_index = i;
      line_index = 0;
      prev_src = src[src_index];
      prev_prev_out = prev_src * coeff[6];
      prev_out = prev_prev_out;
      coeff_a0 = coeff[0];
      coeff_a1 = coeff[1];
      coeff_b1 = coeff[4];
      coeff_b2 = coeff[5];
      for (j = 0;j < width; j++) {
        curr_src = src[src_index];
        curr_out = curr_src * coeff_a0 + prev_src * coeff_a1 + prev_out * coeff_b1 + prev_prev_out * coeff_b2;
        prev_prev_out = prev_out;
        prev_out = curr_out;
        prev_src = curr_src;
        line[line_index] = prev_out;
        line_index++;
        src_index++;
      }
      src_index--;
      line_index--;
      out_index += height * (width - 1);
      prev_src = src[src_index];
      prev_prev_out = prev_src * coeff[7];
      prev_out = prev_prev_out;
      curr_src = prev_src;
      coeff_a0 = coeff[2];
      coeff_a1 = coeff[3];
      for (j = width - 1;j >= 0; j--) {
        curr_out = curr_src * coeff_a0 + prev_src * coeff_a1 + prev_out * coeff_b1 + prev_prev_out * coeff_b2;
        prev_prev_out = prev_out;
        prev_out = curr_out;
        prev_src = curr_src;
        curr_src = src[src_index];
        out[out_index] = line[line_index] + prev_out;
        src_index--;
        line_index--;
        out_index -= height;
      }
    }
  }
  function blurMono16(src, width, height, radius) {
    if (!radius) {
      return;
    }
    var out = new Uint16Array(src.length), tmp_line = new Float32Array(Math.max(width, height));
    var coeff = gaussCoef(radius);
    convolveMono16(src, out, tmp_line, coeff, width, height, radius);
    convolveMono16(out, src, tmp_line, coeff, height, width, radius);
  }
  module.exports = blurMono16;
});

// src/common.ts
var BYTES_PER_PIXEL = 4;

// src/worker/create-resize-stages.ts
var MIN_INNER_TILE_SIZE = 2;
function createResizeStages(fromWidth, fromHeight, toWidth, toHeight, initialTileSize, filterPadding) {
  const scaleX = toWidth / fromWidth;
  const scaleY = toHeight / fromHeight;
  const minScale = (2 * filterPadding + MIN_INNER_TILE_SIZE + 1) / initialTileSize;
  if (minScale > 0.5)
    return [{ toWidth, toHeight }];
  const stageCount = Math.ceil(Math.log(Math.min(scaleX, scaleY)) / Math.log(minScale));
  if (stageCount <= 1)
    return [{ toWidth, toHeight }];
  const stages = [];
  for (let i = 0;i < stageCount; i++) {
    const width = Math.round(Math.pow(Math.pow(fromWidth, stageCount - i - 1) * Math.pow(toWidth, i + 1), 1 / stageCount));
    const height = Math.round(Math.pow(Math.pow(fromHeight, stageCount - i - 1) * Math.pow(toHeight, i + 1), 1 / stageCount));
    stages.push({ toWidth: width, toHeight: height });
  }
  return stages;
}

// src/worker/extract-tile.ts
function clearSafariCanvas(canvas, context) {
  if (canvas)
    canvas.width = canvas.height = 0;
  canvas = context = null;
}
function extractTileFromOriginalImage(from, tileTransform) {
  let tempCanvas = new OffscreenCanvas(tileTransform.width, tileTransform.height);
  let tempContext = tempCanvas.getContext("2d");
  if (!tempContext)
    throw new Error("Picsquish error: canvas 2D context not supported");
  tempContext.globalCompositeOperation = "copy";
  tempContext.drawImage(from, tileTransform.x, tileTransform.y, tileTransform.width, tileTransform.height, 0, 0, tileTransform.width, tileTransform.height);
  const arrayBuffer = tempContext.getImageData(0, 0, tileTransform.width, tileTransform.height).data.buffer;
  clearSafariCanvas(tempCanvas, tempContext);
  return arrayBuffer;
}
function extractTileFromResizedImage(from, fromWidth, tileTransform) {
  const tilePixels = new Uint8ClampedArray(tileTransform.width * tileTransform.height * BYTES_PER_PIXEL);
  for (let row = 0;row < tileTransform.height; row++) {
    const srcStart = ((tileTransform.y + row) * fromWidth + tileTransform.x) * BYTES_PER_PIXEL;
    const dstStart = row * tileTransform.width * BYTES_PER_PIXEL;
    tilePixels.set(from.subarray(srcStart, srcStart + tileTransform.width * BYTES_PER_PIXEL), dstStart);
  }
  return tilePixels.buffer;
}
function extractTile(from, fromWidth, tileTransform) {
  if (from instanceof ImageBitmap) {
    return extractTileFromOriginalImage(from, tileTransform);
  } else {
    return extractTileFromResizedImage(from, fromWidth, tileTransform);
  }
}

// src/worker/create-tile-transforms.ts
var PIXEL_EPSILON = 0.00001;
function pixelFloor(x) {
  let nearest = Math.round(x);
  if (Math.abs(x - nearest) < PIXEL_EPSILON)
    return nearest;
  return Math.floor(x);
}
function pixelCeil(x) {
  let nearest = Math.round(x);
  if (Math.abs(x - nearest) < PIXEL_EPSILON)
    return nearest;
  return Math.ceil(x);
}
function createTileTransforms(from, fromWidth, fromHeight, toWidth, toHeight, tileOptions) {
  const { initialSize, filterPadding, filter, unsharpAmount, unsharpRadius, unsharpThreshold } = tileOptions;
  const scaleX = toWidth / fromWidth;
  const scaleY = toHeight / fromHeight;
  const innerTileWidth = pixelFloor(initialSize * scaleX) - 2 * filterPadding;
  const innerTileHeight = pixelFloor(initialSize * scaleY) - 2 * filterPadding;
  if (innerTileWidth < 1 || innerTileHeight < 1) {
    throw new Error("Picsquish error: target tile width/height is too small");
  }
  let x, y;
  let innerX, innerY, toTileWidth, toTileHeight;
  const tileTransforms = [];
  for (innerY = 0;innerY < toHeight; innerY += innerTileHeight) {
    for (innerX = 0;innerX < toWidth; innerX += innerTileWidth) {
      x = innerX - filterPadding;
      if (x < 0)
        x = 0;
      toTileWidth = innerX + innerTileWidth + filterPadding - x;
      if (x + toTileWidth >= toWidth)
        toTileWidth = toWidth - x;
      y = innerY - filterPadding;
      if (y < 0)
        y = 0;
      toTileHeight = innerY + innerTileHeight + filterPadding - y;
      if (y + toTileHeight >= toHeight)
        toTileHeight = toHeight - y;
      const tileTransform = {
        toX: x,
        toY: y,
        toWidth: toTileWidth,
        toHeight: toTileHeight,
        toInnerX: innerX,
        toInnerY: innerY,
        toInnerWidth: innerTileWidth,
        toInnerHeight: innerTileHeight,
        offsetX: x / scaleX - pixelFloor(x / scaleX),
        offsetY: y / scaleY - pixelFloor(y / scaleY),
        scaleX,
        scaleY,
        x: pixelFloor(x / scaleX),
        y: pixelFloor(y / scaleY),
        width: pixelCeil(toTileWidth / scaleX),
        height: pixelCeil(toTileHeight / scaleY),
        initialSize,
        filterPadding,
        filter,
        unsharpAmount,
        unsharpRadius,
        unsharpThreshold
      };
      const tile = extractTile(from, fromWidth, tileTransform);
      tileTransforms.push({ tile, ...tileTransform });
    }
  }
  return tileTransforms;
}

// src/worker/create-resize-metadata.ts
async function createResizeMetadataForInitialImage(image, tileOptions, dimensionLimits) {
  const imageBitmap = image instanceof Blob ? await createImageBitmap(image) : image;
  const resizeMetadata = [];
  for (const dimensionLimit of dimensionLimits) {
    const from = imageBitmap;
    const fromWidth = imageBitmap.width;
    const fromHeight = imageBitmap.height;
    const widthRatio = dimensionLimit / fromWidth;
    const heightRatio = dimensionLimit / fromHeight;
    const scaleFactor = Math.min(widthRatio, heightRatio, 1);
    const finalToWidth = Math.floor(fromWidth * scaleFactor);
    const finalToHeight = Math.floor(fromHeight * scaleFactor);
    const stages = createResizeStages(fromWidth, fromHeight, finalToWidth, finalToHeight, tileOptions.initialSize, tileOptions.filterPadding);
    const tileTransforms = createTileTransforms(from, fromWidth, fromHeight, stages[0].toWidth, stages[0].toHeight, tileOptions);
    resizeMetadata.push({ stages, tileTransforms });
  }
  imageBitmap.close();
  return resizeMetadata;
}
function createResizeMetadataForResizedImage(image, tileOptions) {
  const tileTransforms = createTileTransforms(image.from, image.fromWidth, image.fromHeight, image.stages[0].toWidth, image.stages[0].toHeight, tileOptions);
  return [{ stages: image.stages, tileTransforms }];
}
async function createResizeMetadata(params) {
  if (params.image instanceof Blob || params.image instanceof ImageBitmap) {
    return createResizeMetadataForInitialImage(params.image, params.tileOptions, params.dimensionLimits);
  } else {
    return createResizeMetadataForResizedImage(params.image, params.tileOptions);
  }
}

// src/worker/multimath/resize-filter-info.ts
var FILTER_MAP = {
  box: {
    win: 0.5,
    fn: (x) => {
      if (x < 0)
        x = -x;
      return x < 0.5 ? 1 : 0;
    }
  },
  hamming: {
    win: 1,
    fn: (x) => {
      if (x < 0)
        x = -x;
      if (x >= 1)
        return 0;
      if (x < 0.00000011920929)
        return 1;
      const xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * (0.54 + 0.46 * Math.cos(xpi / 1));
    }
  },
  lanczos2: {
    win: 2,
    fn: (x) => {
      if (x < 0)
        x = -x;
      if (x >= 2)
        return 0;
      if (x < 0.00000011920929)
        return 1;
      const xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * Math.sin(xpi / 2) / (xpi / 2);
    }
  },
  lanczos3: {
    win: 3,
    fn: (x) => {
      if (x < 0)
        x = -x;
      if (x >= 3)
        return 0;
      if (x < 0.00000011920929)
        return 1;
      const xpi = x * Math.PI;
      return Math.sin(xpi) / xpi * Math.sin(xpi / 3) / (xpi / 3);
    }
  },
  mks2013: {
    win: 2.5,
    fn: (x) => {
      if (x < 0)
        x = -x;
      if (x >= 2.5)
        return 0;
      if (x >= 1.5)
        return -0.125 * (x - 2.5) * (x - 2.5);
      if (x >= 0.5)
        return 0.25 * (4 * x * x - 11 * x + 7);
      return 1.0625 - 1.75 * x * x;
    }
  }
};

// src/worker/multimath/resize-filter-gen.ts
var FIXED_FRAC_BITS = 14;
function toFixedPoint(num) {
  return Math.round(num * ((1 << FIXED_FRAC_BITS) - 1));
}
function resizeFilterGen(filter, srcSize, destSize, scale, offset) {
  let filterFunction = FILTER_MAP[filter].fn;
  let scaleInverted = 1 / scale;
  let scaleClamped = Math.min(1, scale);
  let srcWindow = FILTER_MAP[filter].win / scaleClamped;
  let destPixel, srcPixel, srcFirst, srcLast, filterElementSize, floatFilter, fxpFilter, total, pxl, idx, floatVal, filterTotal, filterVal;
  let leftNotEmpty, rightNotEmpty, filterShift, filterSize;
  let maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
  let packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
  let packedFilterPtr = 0;
  let slowCopy = !packedFilter.subarray || !packedFilter.set;
  for (destPixel = 0;destPixel < destSize; destPixel++) {
    srcPixel = (destPixel + 0.5) * scaleInverted + offset;
    srcFirst = Math.max(0, Math.floor(srcPixel - srcWindow));
    srcLast = Math.min(srcSize - 1, Math.ceil(srcPixel + srcWindow));
    filterElementSize = srcLast - srcFirst + 1;
    floatFilter = new Float32Array(filterElementSize);
    fxpFilter = new Int16Array(filterElementSize);
    total = 0;
    for (pxl = srcFirst, idx = 0;pxl <= srcLast; pxl++, idx++) {
      floatVal = filterFunction((pxl + 0.5 - srcPixel) * scaleClamped);
      total += floatVal;
      floatFilter[idx] = floatVal;
    }
    filterTotal = 0;
    for (idx = 0;idx < floatFilter.length; idx++) {
      filterVal = floatFilter[idx] / total;
      filterTotal += filterVal;
      fxpFilter[idx] = toFixedPoint(filterVal);
    }
    fxpFilter[destSize >> 1] += toFixedPoint(1 - filterTotal);
    leftNotEmpty = 0;
    while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
      leftNotEmpty++;
    }
    if (leftNotEmpty < fxpFilter.length) {
      rightNotEmpty = fxpFilter.length - 1;
      while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
        rightNotEmpty--;
      }
      filterShift = srcFirst + leftNotEmpty;
      filterSize = rightNotEmpty - leftNotEmpty + 1;
      packedFilter[packedFilterPtr++] = filterShift;
      packedFilter[packedFilterPtr++] = filterSize;
      if (!slowCopy) {
        packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
        packedFilterPtr += filterSize;
      } else {
        for (idx = leftNotEmpty;idx <= rightNotEmpty; idx++) {
          packedFilter[packedFilterPtr++] = fxpFilter[idx];
        }
      }
    } else {
      packedFilter[packedFilterPtr++] = 0;
      packedFilter[packedFilterPtr++] = 0;
    }
  }
  return packedFilter;
}

// src/worker/multimath/convolve.ts
function clampTo8(i) {
  return i < 0 ? 0 : i > 255 ? 255 : i;
}
function clampNegative(i) {
  return i >= 0 ? i : 0;
}
function convolveHor(src, dest, srcW, srcH, destW, filters) {
  let r, g, b, a;
  let filterPtr, filterShift, filterSize;
  let srcPtr, srcY, destX, filterVal;
  let srcOffset = 0, destOffset = 0;
  for (srcY = 0;srcY < srcH; srcY++) {
    filterPtr = 0;
    for (destX = 0;destX < destW; destX++) {
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0;
      for (;filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++];
        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      }
      dest[destOffset + 3] = clampNegative(a >> 7);
      dest[destOffset + 2] = clampNegative(b >> 7);
      dest[destOffset + 1] = clampNegative(g >> 7);
      dest[destOffset] = clampNegative(r >> 7);
      destOffset = destOffset + srcH * 4 | 0;
    }
    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}
function convolveVert(src, dest, srcW, srcH, destW, filters) {
  let r, g, b, a;
  let filterPtr, filterShift, filterSize;
  let srcPtr, srcY, destX, filterVal;
  let srcOffset = 0, destOffset = 0;
  for (srcY = 0;srcY < srcH; srcY++) {
    filterPtr = 0;
    for (destX = 0;destX < destW; destX++) {
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0;
      for (;filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++];
        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      }
      r >>= 7;
      g >>= 7;
      b >>= 7;
      a >>= 7;
      dest[destOffset + 3] = clampTo8(a + (1 << 13) >> 14);
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14);
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14);
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14);
      destOffset = destOffset + srcH * 4 | 0;
    }
    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}
function convolveHorWithPre(src, dest, srcW, srcH, destW, filters) {
  let r, g, b, a, alpha;
  let filterPtr, filterShift, filterSize;
  let srcPtr, srcY, destX, filterVal;
  let srcOffset = 0, destOffset = 0;
  for (srcY = 0;srcY < srcH; srcY++) {
    filterPtr = 0;
    for (destX = 0;destX < destW; destX++) {
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0;
      for (;filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++];
        alpha = src[srcPtr + 3];
        a = a + filterVal * alpha | 0;
        b = b + filterVal * src[srcPtr + 2] * alpha | 0;
        g = g + filterVal * src[srcPtr + 1] * alpha | 0;
        r = r + filterVal * src[srcPtr] * alpha | 0;
        srcPtr = srcPtr + 4 | 0;
      }
      b = b / 255 | 0;
      g = g / 255 | 0;
      r = r / 255 | 0;
      dest[destOffset + 3] = clampNegative(a >> 7);
      dest[destOffset + 2] = clampNegative(b >> 7);
      dest[destOffset + 1] = clampNegative(g >> 7);
      dest[destOffset] = clampNegative(r >> 7);
      destOffset = destOffset + srcH * 4 | 0;
    }
    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}
function convolveVertWithPre(src, dest, srcW, srcH, destW, filters) {
  let r, g, b, a;
  let filterPtr, filterShift, filterSize;
  let srcPtr, srcY, destX, filterVal;
  let srcOffset = 0, destOffset = 0;
  for (srcY = 0;srcY < srcH; srcY++) {
    filterPtr = 0;
    for (destX = 0;destX < destW; destX++) {
      filterShift = filters[filterPtr++];
      filterSize = filters[filterPtr++];
      srcPtr = srcOffset + filterShift * 4 | 0;
      r = g = b = a = 0;
      for (;filterSize > 0; filterSize--) {
        filterVal = filters[filterPtr++];
        a = a + filterVal * src[srcPtr + 3] | 0;
        b = b + filterVal * src[srcPtr + 2] | 0;
        g = g + filterVal * src[srcPtr + 1] | 0;
        r = r + filterVal * src[srcPtr] | 0;
        srcPtr = srcPtr + 4 | 0;
      }
      r >>= 7;
      g >>= 7;
      b >>= 7;
      a >>= 7;
      a = clampTo8(a + (1 << 13) >> 14);
      if (a > 0) {
        r = r * 255 / a | 0;
        g = g * 255 / a | 0;
        b = b * 255 / a | 0;
      }
      dest[destOffset + 3] = a;
      dest[destOffset + 2] = clampTo8(b + (1 << 13) >> 14);
      dest[destOffset + 1] = clampTo8(g + (1 << 13) >> 14);
      dest[destOffset] = clampTo8(r + (1 << 13) >> 14);
      destOffset = destOffset + srcH * 4 | 0;
    }
    destOffset = (srcY + 1) * 4 | 0;
    srcOffset = (srcY + 1) * srcW * 4 | 0;
  }
}

// src/worker/multimath/resize.ts
function hasAlpha(src, width, height) {
  let ptr = 3;
  let len = width * height * 4 | 0;
  while (ptr < len) {
    if (src[ptr] !== 255)
      return true;
    ptr = ptr + 4 | 0;
  }
  return false;
}
function resetAlpha(dest, width, height) {
  let ptr = 3;
  let len = width * height * 4 | 0;
  while (ptr < len) {
    dest[ptr] = 255;
    ptr = ptr + 4 | 0;
  }
}
function resize(tile, filter, tileWidth, tileHeight, tileToWidth, tileToHeight, tileScaleX, tileScaleY, tileOffsetX, tileOffsetY) {
  const filtersX = resizeFilterGen(filter, tileWidth, tileToWidth, tileScaleX, tileOffsetX);
  const filtersY = resizeFilterGen(filter, tileHeight, tileToHeight, tileScaleY, tileOffsetY);
  const dest = new Uint8Array(tileToWidth * tileToHeight * 4);
  const temp = new Uint16Array(tileToWidth * tileHeight * 4);
  if (hasAlpha(tile, tileWidth, tileHeight)) {
    convolveHorWithPre(tile, temp, tileWidth, tileHeight, tileToWidth, filtersX);
    convolveVertWithPre(temp, dest, tileHeight, tileToWidth, tileToHeight, filtersY);
  } else {
    convolveHor(tile, temp, tileWidth, tileHeight, tileToWidth, filtersX);
    convolveVert(temp, dest, tileHeight, tileToWidth, tileToHeight, filtersY);
    resetAlpha(dest, tileToWidth, tileToHeight);
  }
  return dest;
}

// src/worker/multimath/unsharp-mask.ts
var import_mono16 = __toESM(require_mono16(), 1);
function hsv_v16(img, width, height) {
  let size = width * height;
  let out = new Uint16Array(size);
  let r, g, b, max;
  for (let i = 0;i < size; i++) {
    r = img[4 * i];
    g = img[4 * i + 1];
    b = img[4 * i + 2];
    max = r >= g && r >= b ? r : g >= b && g >= r ? g : b;
    out[i] = max << 8;
  }
  return out;
}
function unsharp(img, width, height, amount, radius, threshold) {
  let v1, v2, vmul;
  let diff, iTimes4;
  if (amount === 0 || radius < 0.5) {
    return;
  }
  if (radius > 2) {
    radius = 2;
  }
  let brightness = hsv_v16(img, width, height);
  let blurred = new Uint16Array(brightness);
  import_mono16.default(blurred, width, height, radius);
  let amountFp = amount / 100 * 4096 + 0.5 | 0;
  let thresholdFp = threshold << 8;
  let size = width * height;
  for (let i = 0;i < size; i++) {
    v1 = brightness[i];
    diff = v1 - blurred[i];
    if (Math.abs(diff) >= thresholdFp) {
      v2 = v1 + (amountFp * diff + 2048 >> 12);
      v2 = v2 > 65280 ? 65280 : v2;
      v2 = v2 < 0 ? 0 : v2;
      v1 = v1 !== 0 ? v1 : 1;
      vmul = (v2 << 12) / v1 | 0;
      iTimes4 = i * 4;
      img[iTimes4] = img[iTimes4] * vmul + 2048 >> 12;
      img[iTimes4 + 1] = img[iTimes4 + 1] * vmul + 2048 >> 12;
      img[iTimes4 + 2] = img[iTimes4 + 2] * vmul + 2048 >> 12;
    }
  }
}

// src/worker/transform-tile.ts
function transformTile(tileTransform) {
  const resizedTile = resize(new Uint8ClampedArray(tileTransform.tile), tileTransform.filter, tileTransform.width, tileTransform.height, tileTransform.toWidth, tileTransform.toHeight, tileTransform.scaleX, tileTransform.scaleY, tileTransform.offsetX, tileTransform.offsetY);
  if (tileTransform.unsharpAmount)
    unsharp(resizedTile, tileTransform.toWidth, tileTransform.toHeight, tileTransform.unsharpAmount, tileTransform.unsharpRadius, tileTransform.unsharpThreshold);
  return resizedTile;
}

// src/worker/on-task-message.ts
async function onTask1Message(taskMessage) {
  const { taskId, squishId, taskType, data } = taskMessage;
  const { image, dimensionLimits, tileOptions } = data;
  try {
    const output = await createResizeMetadata({ image, dimensionLimits, tileOptions });
    return { taskId, squishId, taskType, output };
  } catch (error) {
    return { taskId, squishId, taskType, output: error };
  }
}
function onTask2Message(taskMessage) {
  const { taskId, squishId, workspaceIndex, taskType, data } = taskMessage;
  const { tileTransform } = data;
  try {
    tileTransform.tile = transformTile(tileTransform).buffer;
    return { taskId, squishId, workspaceIndex, taskType, output: tileTransform };
  } catch (error) {
    return { taskId, squishId, workspaceIndex, taskType, output: error };
  }
}

// src/worker/worker.ts
self.onmessage = async (event) => {
  switch (event.data.taskType) {
    case 0 /* CreateResizeMetadata */: {
      const taskMessage = event.data;
      const taskResult = await onTask1Message(taskMessage);
      const tiles = taskResult.output instanceof Error ? [] : taskResult.output.flatMap((m) => m.tileTransforms.map((t) => t.tile));
      return self.postMessage(taskResult, tiles);
    }
    case 1 /* TransformTile */: {
      const taskMessage = event.data;
      const taskResult = onTask2Message(taskMessage);
      const tiles = taskResult.output instanceof Error ? [] : [taskResult.output.tile];
      return self.postMessage(taskResult, tiles);
    }
  }
};
`],{type:`application/javascript`}),f=new class{#e;#t;#n;#r;constructor(){this.#e=new Map,this.#t=new Map,this.#n=null,this.#r=null}#i(){this.#n!==null&&(clearTimeout(this.#n),this.#n=null)}prepare(e,t,n){if(this.#e.size)return;this.#r=n;let r=URL.createObjectURL(d);for(;this.#e.size<t;){let t=new Worker(r);t.onmessage=e,this.#e.set(t,null)}URL.revokeObjectURL(r)}assignTask(e,t,n,r){this.#e.set(e,t),this.#t.set(t,e),this.#i(),e.postMessage(n,r)}setTimeout(){this.#n===null&&this.#e.size!==0&&(this.#n=setTimeout(()=>{for(let e of this.#e.keys())e.terminate();this.#e.clear(),this.#t.clear()},this.#r||0))}getAvailableWorkers(){let e=[];for(let[t,n]of this.#e.entries())n===null&&e.push(t);return e}removeTask(e){let t=this.#t.get(e);t&&this.#e.set(t,null),this.#t.delete(e)}},p=2;function m(e,t,n,r,i,a){let o=n/e,s=r/t,c=(2*a+p+1)/i;if(c>.5)return[{toWidth:n,toHeight:r}];let l=Math.ceil(Math.log(Math.min(o,s))/Math.log(c));if(l<=1)return[{toWidth:n,toHeight:r}];let u=[];for(let i=0;i<l;i++){let a=Math.round((e**(l-i-1)*n**+(i+1))**(1/l)),o=Math.round((t**(l-i-1)*r**+(i+1))**(1/l));u.push({toWidth:a,toHeight:o})}return u}function h(e,t){e&&(e.width=e.height=0),e=t=null}function g(e,t){let n=new OffscreenCanvas(t.width,t.height),r=n.getContext(`2d`);if(!r)throw Error(`Picsquish error: canvas 2D context not supported`);r.globalCompositeOperation=`copy`,r.drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height);let i=r.getImageData(0,0,t.width,t.height).data.buffer;return h(n,r),i}function _(e,t,n){let r=new Uint8ClampedArray(n.width*n.height*l);for(let i=0;i<n.height;i++){let a=((n.y+i)*t+n.x)*l,o=i*n.width*l;r.set(e.subarray(a,a+n.width*l),o)}return r.buffer}function v(e,t,n){return e instanceof ImageBitmap?g(e,n):_(e,t,n)}var y=1e-5;function b(e){let t=Math.round(e);return Math.abs(e-t)<y?t:Math.floor(e)}function x(e){let t=Math.round(e);return Math.abs(e-t)<y?t:Math.ceil(e)}function S(e,t,n,r,i,a){let{initialSize:o,filterPadding:s,filter:c,unsharpAmount:l,unsharpRadius:u,unsharpThreshold:d}=a,f=r/t,p=i/n,m=b(o*f)-2*s,h=b(o*p)-2*s;if(m<1||h<1)throw Error(`Picsquish error: target tile width/height is too small`);let g,_,y,S,C,w,T=[];for(S=0;S<i;S+=h)for(y=0;y<r;y+=m){g=y-s,g<0&&(g=0),C=y+m+s-g,g+C>=r&&(C=r-g),_=S-s,_<0&&(_=0),w=S+h+s-_,_+w>=i&&(w=i-_);let n={toX:g,toY:_,toWidth:C,toHeight:w,toInnerX:y,toInnerY:S,toInnerWidth:m,toInnerHeight:h,offsetX:g/f-b(g/f),offsetY:_/p-b(_/p),scaleX:f,scaleY:p,x:b(g/f),y:b(_/p),width:x(C/f),height:x(w/p),initialSize:o,filterPadding:s,filter:c,unsharpAmount:l,unsharpRadius:u,unsharpThreshold:d},a=v(e,t,n);T.push({tile:a,...n})}return T}async function C(e,t,n){let r=e instanceof Blob?await createImageBitmap(e):e,i=[];for(let e of n){let n=r,a=r.width,o=r.height,s=e/a,c=e/o,l=Math.min(s,c,1),u=m(a,o,Math.floor(a*l),Math.floor(o*l),t.initialSize,t.filterPadding),d=S(n,a,o,u[0].toWidth,u[0].toHeight,t);i.push({stages:u,tileTransforms:d})}return r.close(),i}function w(e,t){let n=S(e.from,e.fromWidth,e.fromHeight,e.stages[0].toWidth,e.stages[0].toHeight,t);return[{stages:e.stages,tileTransforms:n}]}async function T(e){return e.image instanceof Blob||e.image instanceof ImageBitmap?C(e.image,e.tileOptions,e.dimensionLimits):w(e.image,e.tileOptions)}var E={box:{win:.5,fn:e=>(e<0&&(e=-e),e<.5?1:0)},hamming:{win:1,fn:e=>{if(e<0&&(e=-e),e>=1)return 0;if(e<1.1920929e-7)return 1;let t=e*Math.PI;return Math.sin(t)/t*(.54+.46*Math.cos(t/1))}},lanczos2:{win:2,fn:e=>{if(e<0&&(e=-e),e>=2)return 0;if(e<1.1920929e-7)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/2)/(t/2)}},lanczos3:{win:3,fn:e=>{if(e<0&&(e=-e),e>=3)return 0;if(e<1.1920929e-7)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/3)/(t/3)}},mks2013:{win:2.5,fn:e=>(e<0&&(e=-e),e>=2.5?0:e>=1.5?-.125*(e-2.5)*(e-2.5):e>=.5?.25*(4*e*e-11*e+7):1.0625-1.75*e*e)}},D=14;function O(e){return Math.round(e*((1<<D)-1))}function k(e,t,n,r,i){let a=E[e].fn,o=1/r,s=Math.min(1,r),c=E[e].win/s,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,D=Math.floor((c+1)*2),k=new Int16Array((D+2)*n),A=0,j=!k.subarray||!k.set;for(l=0;l<n;l++){for(u=(l+.5)*o+i,d=Math.max(0,Math.floor(u-c)),f=Math.min(t-1,Math.ceil(u+c)),p=f-d+1,m=new Float32Array(p),h=new Int16Array(p),g=0,_=d,v=0;_<=f;_++,v++)y=a((_+.5-u)*s),g+=y,m[v]=y;for(b=0,v=0;v<m.length;v++)x=m[v]/g,b+=x,h[v]=O(x);for(h[n>>1]+=O(1-b),S=0;S<h.length&&h[S]===0;)S++;if(S<h.length){for(C=h.length-1;C>0&&h[C]===0;)C--;if(w=d+S,T=C-S+1,k[A++]=w,k[A++]=T,!j)k.set(h.subarray(S,C+1),A),A+=T;else for(v=S;v<=C;v++)k[A++]=h[v]}else k[A++]=0,k[A++]=0}return k}function A(e){return e<0?0:e>255?255:e}function j(e){return e>=0?e:0}function M(e,t,n,r,i,a){let o,s,c,l,u,d,f,p,m,h,g,_=0,v=0;for(m=0;m<r;m++){for(u=0,h=0;h<i;h++){for(d=a[u++],f=a[u++],p=_+d*4|0,o=s=c=l=0;f>0;f--)g=a[u++],l=l+g*e[p+3]|0,c=c+g*e[p+2]|0,s=s+g*e[p+1]|0,o=o+g*e[p]|0,p=p+4|0;t[v+3]=j(l>>7),t[v+2]=j(c>>7),t[v+1]=j(s>>7),t[v]=j(o>>7),v=v+r*4|0}v=(m+1)*4|0,_=(m+1)*n*4|0}}function N(e,t,n,r,i,a){let o,s,c,l,u,d,f,p,m,h,g,_=0,v=0;for(m=0;m<r;m++){for(u=0,h=0;h<i;h++){for(d=a[u++],f=a[u++],p=_+d*4|0,o=s=c=l=0;f>0;f--)g=a[u++],l=l+g*e[p+3]|0,c=c+g*e[p+2]|0,s=s+g*e[p+1]|0,o=o+g*e[p]|0,p=p+4|0;o>>=7,s>>=7,c>>=7,l>>=7,t[v+3]=A(l+8192>>14),t[v+2]=A(c+8192>>14),t[v+1]=A(s+8192>>14),t[v]=A(o+8192>>14),v=v+r*4|0}v=(m+1)*4|0,_=(m+1)*n*4|0}}function P(e,t,n,r,i,a){let o,s,c,l,u,d,f,p,m,h,g,_,v=0,y=0;for(h=0;h<r;h++){for(d=0,g=0;g<i;g++){for(f=a[d++],p=a[d++],m=v+f*4|0,o=s=c=l=0;p>0;p--)_=a[d++],u=e[m+3],l=l+_*u|0,c=c+_*e[m+2]*u|0,s=s+_*e[m+1]*u|0,o=o+_*e[m]*u|0,m=m+4|0;c=c/255|0,s=s/255|0,o=o/255|0,t[y+3]=j(l>>7),t[y+2]=j(c>>7),t[y+1]=j(s>>7),t[y]=j(o>>7),y=y+r*4|0}y=(h+1)*4|0,v=(h+1)*n*4|0}}function F(e,t,n,r,i,a){let o,s,c,l,u,d,f,p,m,h,g,_=0,v=0;for(m=0;m<r;m++){for(u=0,h=0;h<i;h++){for(d=a[u++],f=a[u++],p=_+d*4|0,o=s=c=l=0;f>0;f--)g=a[u++],l=l+g*e[p+3]|0,c=c+g*e[p+2]|0,s=s+g*e[p+1]|0,o=o+g*e[p]|0,p=p+4|0;o>>=7,s>>=7,c>>=7,l>>=7,l=A(l+8192>>14),l>0&&(o=o*255/l|0,s=s*255/l|0,c=c*255/l|0),t[v+3]=l,t[v+2]=A(c+8192>>14),t[v+1]=A(s+8192>>14),t[v]=A(o+8192>>14),v=v+r*4|0}v=(m+1)*4|0,_=(m+1)*n*4|0}}function I(e,t,n){let r=3,i=t*n*4|0;for(;r<i;){if(e[r]!==255)return!0;r=r+4|0}return!1}function L(e,t,n){let r=3,i=t*n*4|0;for(;r<i;)e[r]=255,r=r+4|0}function R(e,t,n,r,i,a,o,s,c,l){let u=k(t,n,i,o,c),d=k(t,r,a,s,l),f=new Uint8Array(i*a*4),p=new Uint16Array(i*r*4);return I(e,n,r)?(P(e,p,n,r,i,u),F(p,f,r,i,a,d)):(M(e,p,n,r,i,u),N(p,f,r,i,a,d),L(f,i,a)),f}var z=o(s(),1);function B(e,t,n){let r=t*n,i=new Uint16Array(r),a,o,s,c;for(let t=0;t<r;t++)a=e[4*t],o=e[4*t+1],s=e[4*t+2],c=a>=o&&a>=s?a:o>=s&&o>=a?o:s,i[t]=c<<8;return i}function V(e,t,n,r,i,a){let o,s,c,l,u;if(r===0||i<.5)return;i>2&&(i=2);let d=B(e,t,n),f=new Uint16Array(d);z.default(f,t,n,i);let p=r/100*4096+.5|0,m=a<<8,h=t*n;for(let t=0;t<h;t++)o=d[t],l=o-f[t],Math.abs(l)>=m&&(s=o+(p*l+2048>>12),s=s>65280?65280:s,s=s<0?0:s,o=o===0?1:o,c=(s<<12)/o|0,u=t*4,e[u]=e[u]*c+2048>>12,e[u+1]=e[u+1]*c+2048>>12,e[u+2]=e[u+2]*c+2048>>12)}function H(e){let t=R(new Uint8ClampedArray(e.tile),e.filter,e.width,e.height,e.toWidth,e.toHeight,e.scaleX,e.scaleY,e.offsetX,e.offsetY);return e.unsharpAmount&&V(t,e.toWidth,e.toHeight,e.unsharpAmount,e.unsharpRadius,e.unsharpThreshold),t}async function U(e){let{taskId:t,squishId:n,taskType:r,data:i}=e,{image:a,dimensionLimits:o,tileOptions:s}=i;try{return{taskId:t,squishId:n,taskType:r,output:await T({image:a,dimensionLimits:o,tileOptions:s})}}catch(e){return{taskId:t,squishId:n,taskType:r,output:e}}}function W(e){let{taskId:t,squishId:n,workspaceIndex:r,taskType:i,data:a}=e,{tileTransform:o}=a;try{return o.tile=H(o).buffer,{taskId:t,squishId:n,workspaceIndex:r,taskType:i,output:o}}catch(e){return{taskId:t,squishId:n,workspaceIndex:r,taskType:i,output:e}}}var G=(()=>{let e=0;return()=>++e})(),K=new class{#e;#t;#n;constructor(){this.#e=new Map,this.#t=[],this.#n=[]}#r(e,t){let n=G(),r={taskId:n,squishId:e.squishId,taskType:0,data:e.data};if(!t)return U(r).then(e=>this.#l(e));let i=e.data.image instanceof ImageBitmap?[e.data.image]:[];f.assignTask(t,n,r,i)}#i(e,t){let n=G(),r={taskId:n,squishId:e.squishId,workspaceIndex:e.workspaceIndex,taskType:1,data:e.data};if(!t)return this.#l(W(r));f.assignTask(t,n,r,[e.data.tileTransform.tile])}#a(e){let t=this.#t.shift();if(t)return this.#r(t,e);let n=this.#n.shift();if(n)return this.#i(n,e)}#o(e){if(this.#t.length===0&&this.#n.length===0)return f.setTimeout();if(e)return this.#a();let t=f.getAvailableWorkers();for(let e of t)this.#a(e)}#s(e,t){let{squishId:n,output:r}=t;if(r instanceof Error)return e.workspaceHandlers.forEach(e=>e.reject(r));for(let[t,i]of r.entries()){let r=i.stages[0].toWidth,a=i.stages[0].toHeight;e.workspaces.set(t,{to:new Uint8ClampedArray(r*a*l),toWidth:r,toHeight:a,stages:i.stages,remainingTileCount:i.tileTransforms.length});for(let e of i.tileTransforms)this.#n.push({squishId:n,workspaceIndex:t,data:{tileTransform:e}})}}#c(e,t){let{squishId:n,workspaceIndex:r,output:i}=t;if(!e.workspaces.has(r))return;let a=e.workspaces.get(r);if(!a)throw Error(`Picsquish error: workspace not found`);let o=e.workspaceHandlers.get(r);if(!o)throw Error(`Picsquish error: workspaceHandler not found`);if(i instanceof Error)return e.workspaces.delete(r),this.#n=this.#n.filter(e=>!(e.squishId===n&&e.workspaceIndex===r)),o.reject(i);if(u(a.to,a.toWidth,i),--a.remainingTileCount,!a.remainingTileCount){if(a.stages.shift(),!a.stages[0])return e.workspaces.delete(r),o.resolve(new c(a.to,a.toWidth,a.toHeight));this.#t.push({squishId:n,data:{image:{from:a.to,fromWidth:a.toWidth,fromHeight:a.toHeight,stages:a.stages},dimensionLimits:[],tileOptions:e.tileOptions}})}}#l(e){let t=this.#e.get(e.squishId);if(!t)throw Error(`Picsquish error: squishContext not found`);switch(e.taskType){case 0:this.#s(t,e);break;case 1:this.#c(t,e);break}t.workspaces.size||this.#e.delete(e.squishId),f.removeTask(e.taskId),this.#o(t.useMainThread)}add(e,t,n,r){r||f.prepare(e=>this.#l(e.data),t,n);let i=[],a=new Map;for(let t=0;t<e.dimensionLimits.length;t++)i.push(new Promise((e,n)=>{a.set(t,{resolve:e,reject:n})}));let o=G();return this.#e.set(o,{tileOptions:e.tileOptions,workspaces:new Map,workspaceHandlers:a,useMainThread:r}),this.#t.push({squishId:o,data:e}),queueMicrotask(()=>this.#o(r)),i}};function q(e){let t=new OffscreenCanvas(e.width,e.height),n=t.getContext(`2d`);if(!n)throw Error(`Picsquish error: no canvas 2D context`);return n.drawImage(e,0,0),t.transferToImageBitmap()}function J(e,t,n={}){let r=n.tileSize||1024,i=n.filter||`mks2013`,a=n.unsharpAmount||0,o=n.unsharpRadius||0,s=n.unsharpThreshold||0,c=!!n.useMainThread,l=typeof navigator>`u`?1:navigator.hardwareConcurrency,u=n.maxWorkerPoolSize||Math.min(l,4),d=n.maxWorkerIdleTime||2e3,f={initialSize:r,filterPadding:Math.ceil(Math.max(3,2.5*o|0)),filter:i,unsharpAmount:a,unsharpRadius:o,unsharpThreshold:s},p=e instanceof Blob?e:q(e);return t instanceof Array?K.add({image:p,dimensionLimits:t,tileOptions:f},u,d,c):K.add({image:p,dimensionLimits:[t],tileOptions:f},u,d,c)[0]}var Y={"8k":{"image/png":[8192,1e4,1],"image/jpeg":[8192,3e4,.3],"image/webp":[8192,4e4,.3]},"20k":{"image/png":[20480,12800,1],"image/jpeg":[20480,1e5,.7],"image/webp":[20480,135e3,.7]},"50k":{"image/png":[51200,32e3,1],"image/jpeg":[51200,25e4,.7],"image/webp":[51200,34e4,.7]},"100k":{"image/png":[102400,66e3,1],"image/jpeg":[102400,41e4,.77],"image/webp":[102400,57e4,.75]},"300k":{"image/png":[307200,205e3,1],"image/jpeg":[307200,102e4,.82],"image/webp":[307200,14e5,.8]},"600k":{"image/png":[614400,41e4,1],"image/jpeg":[614400,175e4,.85],"image/webp":[614400,236e4,.84]},"1000k":{"image/png":[1024e3,68e4,1],"image/jpeg":[1024e3,26e5,.92],"image/webp":[1024e3,37e5,.9]}},X=class t{#e;#t;#n;#r;#i;#a;#o;constructor(){this.#a=!1}get resized(){return!!(this.#r&&this.#a)}prepare(){this.#r||=document.createElement(`canvas`)}async set_image(e){if(this.clean(),e instanceof ImageBitmap){this.#n=e,this.#e=null,this.#t=0;return}typeof e==`string`?this.#e=await(await fetch(e)).blob():this.#e=e,this.#t=this.#e.size,this.#n=await createImageBitmap(this.#e)}async resize_by_presets(e,t){let n,r={output_type:t||`image/webp`,output_quality:1};switch(e){case`8k`:case`20k`:case`50k`:case`100k`:case`300k`:case`600k`:case`1000k`:let[t,i,a]=Y[e][r.output_type],[o,s]=Z(this.#n.width,this.#n.height,i);this.#n.width*this.#n.height<i&&(o=this.#n.width,s=this.#n.height,this.#t>0?a=Math.min(.98,Math.max(.55,.75*Math.sqrt(t/this.#t))):a+=(1-a)/2.5),n={w:o,h:s},r.output_quality=a;break;default:throw Error(`unknown preset "${e}"`)}await this.resize(n),this.#o=r}async resize(e){t.calc_size(this.#n.width,this.#n.height,e);let n=e;this.#i=await J(this.#n,Math.max(n.w,n.h)),this.#a=!0,this.#o=void 0}static calc_size(t,n,r){e(t>0),e(n>0),e(r?.h>0||r?.w>0),r.w>0||(r.w=r.h*t/n),r.h>0||(r.h=r.w*n/t)}async get_blob(e){if(!this.#a)throw Error(`not resized.`);let t={type:e?.output_type||this.#o?.output_type||`image/webp`,quality:e?.output_quality||this.#o?.output_quality||1},n;return n=this.#i?await this.#i.toBlob(t):await new Promise((e,n)=>{try{this.#r.toBlob(t=>{e(t)},t.type,t.quality)}catch(e){n(e)}}),this.#t>0&&(this.#e.size,n.size),n}clean(){this.#r&&this.#r.height>0&&(this.#r.height=0),this.#n&&=(this.#n.close(),null),this.#i=null,this.#e=null,this.#t=0,this.#a=!1}};function Z(e,t,n){if(e<=0||t<=0||n<=0)return[0,0];if(n>=e*t)return[e,t];let r=e/t,i=Math.round(Math.sqrt(n/r)),a=Math.round(r*i);return a<1&&(a=1),i<1&&(i=1),[a,i]}export{X as t};