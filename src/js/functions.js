const trigConstants = require( './constants.js' );
const pi180 = trigConstants.pi180;
const pi180Rev = trigConstants.pi180Rev;

/**
* @description provides trigonmic util methods - namespace.
* @mixin
*/
let trig = {};

/**
* @description convert degrees to radians.
* @param {number} degrees - the degree value to convert.
* @returns {number} result.
*/
function degreesToRadians( degrees ) {
	return degrees * pi180;
}

/**
* @description convert radians to degrees.
* @param {number} radians - the degree value to convert.
* @returns {number} result.
*/
function radiansToDegrees( radians ) {
	return radians * pi180Rev;
}

/**
* @description get length of opposite leg of triangle given the angle and adjactent leg length
* @param {number} angle - the angle of the triangle.
* @param {number} adjacentLength - the length of the adjacent leg.
* @returns {number} result.
*/
function getOppositeLength( angle, adjacentLength ) {
	return Math.sin( angle ) * adjacentLength;
}

/**
* @description get new X coordinate from angle and distance.
* @param {number} radians - the angle to transform in radians.
* @param {number} distance - the distance to transform.
* @returns {number} result.
*/
function getAdjacentLength( radians, distance ) {
	return Math.cos( radians ) * distance;
}

/**
* @description calculate the angle between 2 coordinates.
* @param {number} x1 - X coordinate of vector 1.
* @param {number} y1 - Y coordinate of vector 1.
* @param {number} x2 - X coordinate of vector 2.
* @param {number} y2 - Y coordinate of vector 2.
* @returns {number} theta - the result.
*/
function angle( x1, y1, x2, y2 ) {
    x1 -= x2;
    y1 -= y2;
    return Math.atan2( -y1, -x1 );
}

/**
* @description calculate distance between 2 vector coordinates.
* @param {number} x1 - X coordinate of vector 1.
* @param {number} y1 - Y coordinate of vector 1.
* @param {number} x2 - X coordinate of vector 2.
* @param {number} y2 - Y coordinate of vector 2.
* @returns {number} result.
*/
function dist( x1, y1, x2, y2 ) {
	x2 -= x1;
	y2 -= y1;
	return Math.sqrt( x2 * x2 + y2 * y2 );
}

/**
* @description Calculate new coordinates given origin, angle and distance.
* @param {number} x - X coordinate of origin.
* @param {number} y - Y coordinate of origin.
* @param {number} angle - radians.
* @param {number} distance - distance.
* @returns {object} resultant x/y coordinates.
* @returns {number} new x coordinate.
* @returns {number} new y coordinate.
*/
function findNewPoint( x, y, angle, distance ) {
	return {
		x: Math.cos(angle) * distance + x,
		y: Math.sin(angle) * distance + y
	};
}

/**
* @description Calculate velocity vector given origin, angle and inpulse.
* @param {number} x - X coordinate of origin.
* @param {number} y - Y coordinate of origin.
* @param {number} angle - radians.
* @param {number} inpulse - velocity of impulse.
* @returns {object} resultant x/y velocity vector.
* @returns {number} new x velocity vector.
* @returns {number} new y velocity vector.
*/
function calculateVelocities( x, y, angle, impulse ) {
	var a2 = Math.atan2(Math.sin(angle) * impulse + y - y, Math.cos(angle) * impulse + x - x);
	return {
		xVel: Math.cos(a2) * impulse,
		yVel: Math.sin(a2) * impulse
	};
}

trig.angle = angle;
trig.dist = dist;
trig.degreesToRadians = degreesToRadians;
trig.radiansToDegrees = radiansToDegrees;
trig.getAdjacentLength = getAdjacentLength;
trig.getOppositeLength = getOppositeLength;
trig.findNewPoint = findNewPoint;
trig.calculateVelocities = calculateVelocities;

module.exports = trig;