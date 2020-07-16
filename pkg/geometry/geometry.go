package geometry

import "math/rand"

// NewVec3Random returns a random Vec3 with coordinates range between params.
func NewVec3Random(min Vec3, max Vec3) Vec3 {
	return Vec3{
		X: min.X + rand.Uint64()%(max.X-min.X),
		Y: min.Y + rand.Uint64()%(max.Y-min.Y),
		Z: min.Z + rand.Uint64()%(max.Z-min.Z),
	}
}
