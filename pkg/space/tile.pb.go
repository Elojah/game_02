// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: tile.proto

package space

import (
	fmt "fmt"
	geometry "github.com/elojah/game_02/pkg/geometry"
	github_com_elojah_game_02_pkg_ulid "github.com/elojah/game_02/pkg/ulid"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	github_com_gogo_protobuf_sortkeys "github.com/gogo/protobuf/sortkeys"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
	strconv "strconv"
	strings "strings"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Terrain int32

const (
	Sky    Terrain = 0
	Floor  Terrain = 1
	Pillar Terrain = 2
	Wall   Terrain = 3
)

var Terrain_name = map[int32]string{
	0: "Sky",
	1: "Floor",
	2: "Pillar",
	3: "Wall",
}

var Terrain_value = map[string]int32{
	"Sky":    0,
	"Floor":  1,
	"Pillar": 2,
	"Wall":   3,
}

func (Terrain) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_00eb11d7cb77dd46, []int{0}
}

type TileSet struct {
	// ID MUST be delivered by mapper API as filename.png
	// e.g: http://url/03432IUHUI.png
	ID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"-"`
	// e.g: dungeon,desert,mountain,etc.
	Name string `protobuf:"bytes,2,opt,name=Name,proto3" json:"Name,omitempty"`
	// Size of 1 tile in x and y in pixels
	Size_ uint64 `protobuf:"varint,3,opt,name=Size,proto3" json:"Size,omitempty"`
	// Number of tile per line
	X uint64 `protobuf:"varint,4,opt,name=X,proto3" json:"X,omitempty"`
	// Number of tile per column
	Y uint64 `protobuf:"varint,5,opt,name=Y,proto3" json:"Y,omitempty"`
	// Terrains key -> Terrain enum (int32 default pb type)
	// Terrains value -> absolute index in tileset
	Terrains map[int32]uint64 `protobuf:"bytes,6,rep,name=Terrains,proto3" json:"Terrains,omitempty" protobuf_key:"varint,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3"`
}

func (m *TileSet) Reset()      { *m = TileSet{} }
func (*TileSet) ProtoMessage() {}
func (*TileSet) Descriptor() ([]byte, []int) {
	return fileDescriptor_00eb11d7cb77dd46, []int{0}
}
func (m *TileSet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TileSet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TileSet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TileSet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TileSet.Merge(m, src)
}
func (m *TileSet) XXX_Size() int {
	return m.Size()
}
func (m *TileSet) XXX_DiscardUnknown() {
	xxx_messageInfo_TileSet.DiscardUnknown(m)
}

var xxx_messageInfo_TileSet proto.InternalMessageInfo

func (m *TileSet) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *TileSet) GetSize_() uint64 {
	if m != nil {
		return m.Size_
	}
	return 0
}

func (m *TileSet) GetX() uint64 {
	if m != nil {
		return m.X
	}
	return 0
}

func (m *TileSet) GetY() uint64 {
	if m != nil {
		return m.Y
	}
	return 0
}

func (m *TileSet) GetTerrains() map[int32]uint64 {
	if m != nil {
		return m.Terrains
	}
	return nil
}

type TileMap struct {
	Set TileSet       `protobuf:"bytes,1,opt,name=Set,proto3" json:"Set"`
	Dim geometry.Vec3 `protobuf:"bytes,2,opt,name=Dim,proto3" json:"Dim"`
	Map []Terrain     `protobuf:"varint,3,rep,packed,name=Map,proto3,enum=space.Terrain" json:"Map,omitempty"`
}

func (m *TileMap) Reset()      { *m = TileMap{} }
func (*TileMap) ProtoMessage() {}
func (*TileMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_00eb11d7cb77dd46, []int{1}
}
func (m *TileMap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TileMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TileMap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TileMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TileMap.Merge(m, src)
}
func (m *TileMap) XXX_Size() int {
	return m.Size()
}
func (m *TileMap) XXX_DiscardUnknown() {
	xxx_messageInfo_TileMap.DiscardUnknown(m)
}

var xxx_messageInfo_TileMap proto.InternalMessageInfo

func (m *TileMap) GetSet() TileSet {
	if m != nil {
		return m.Set
	}
	return TileSet{}
}

func (m *TileMap) GetDim() geometry.Vec3 {
	if m != nil {
		return m.Dim
	}
	return geometry.Vec3{}
}

func (m *TileMap) GetMap() []Terrain {
	if m != nil {
		return m.Map
	}
	return nil
}

func init() {
	proto.RegisterEnum("space.Terrain", Terrain_name, Terrain_value)
	proto.RegisterType((*TileSet)(nil), "space.TileSet")
	proto.RegisterMapType((map[int32]uint64)(nil), "space.TileSet.TerrainsEntry")
	proto.RegisterType((*TileMap)(nil), "space.TileMap")
}

func init() { proto.RegisterFile("tile.proto", fileDescriptor_00eb11d7cb77dd46) }

var fileDescriptor_00eb11d7cb77dd46 = []byte{
	// 463 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x52, 0xbf, 0x6f, 0xd3, 0x40,
	0x18, 0xf5, 0xe7, 0x1f, 0x49, 0xfb, 0xb5, 0x54, 0xd6, 0x89, 0xc1, 0x8a, 0xd0, 0xc5, 0xaa, 0x04,
	0xb2, 0x90, 0x6a, 0xa3, 0x44, 0x48, 0x15, 0x2c, 0x28, 0x32, 0x48, 0x19, 0x8a, 0x90, 0x53, 0x41,
	0x3b, 0xa1, 0x4b, 0x38, 0x5c, 0x93, 0x73, 0x6d, 0xb9, 0x0e, 0x52, 0x60, 0x61, 0x64, 0xe4, 0xcf,
	0xe0, 0x4f, 0x60, 0x64, 0xec, 0x98, 0xb1, 0x62, 0x88, 0xc8, 0x65, 0x41, 0x4c, 0x1d, 0x19, 0x91,
	0xcf, 0x6d, 0x20, 0x4b, 0xb7, 0xf7, 0xbe, 0xf7, 0xbe, 0xcf, 0xcf, 0x4f, 0x87, 0x58, 0x26, 0x82,
	0xfb, 0x79, 0x91, 0x95, 0x19, 0xb1, 0xce, 0x72, 0x36, 0xe2, 0xad, 0xbd, 0x38, 0x29, 0x4f, 0x26,
	0x43, 0x7f, 0x94, 0xa5, 0x41, 0x9c, 0xc5, 0x59, 0xa0, 0xd4, 0xe1, 0xe4, 0xad, 0x62, 0x8a, 0x28,
	0x54, 0x6f, 0xb5, 0x1e, 0xfe, 0x67, 0xe7, 0x22, 0x7b, 0xc7, 0x4e, 0x82, 0x98, 0xa5, 0xfc, 0xf5,
	0x83, 0x4e, 0x90, 0x8f, 0xe3, 0x20, 0xe6, 0x59, 0xca, 0xcb, 0x62, 0xba, 0x02, 0xf5, 0xda, 0xee,
	0x67, 0x1d, 0x9b, 0x87, 0x89, 0xe0, 0x03, 0x5e, 0x92, 0x1e, 0xea, 0xfd, 0xd0, 0x01, 0x17, 0xbc,
	0xed, 0x5e, 0xe7, 0x7c, 0xde, 0xd6, 0x7e, 0xcc, 0xdb, 0x77, 0x6f, 0x3e, 0x3b, 0x11, 0xc9, 0x1b,
	0xbf, 0x1f, 0xfe, 0x9e, 0xb7, 0x61, 0x2f, 0xd2, 0xfb, 0x21, 0x21, 0x68, 0x3e, 0x67, 0x29, 0x77,
	0x74, 0x17, 0xbc, 0xcd, 0x48, 0xe1, 0x6a, 0x36, 0x48, 0x3e, 0x70, 0xc7, 0x70, 0xc1, 0x33, 0x23,
	0x85, 0xc9, 0x36, 0xc2, 0x91, 0x63, 0xaa, 0x01, 0x1c, 0x55, 0xec, 0xd8, 0xb1, 0x6a, 0x76, 0x4c,
	0xf6, 0x71, 0xe3, 0x90, 0x17, 0x05, 0x4b, 0x4e, 0xcf, 0x9c, 0x86, 0x6b, 0x78, 0x5b, 0x9d, 0x3b,
	0xbe, 0xea, 0xc4, 0xbf, 0x4a, 0xea, 0x5f, 0xcb, 0x4f, 0x4f, 0xcb, 0x62, 0x1a, 0xad, 0xdc, 0xad,
	0xc7, 0x78, 0x6b, 0x4d, 0x22, 0x36, 0x1a, 0x63, 0x3e, 0x55, 0xff, 0x64, 0x45, 0x15, 0x24, 0xb7,
	0xd1, 0x7a, 0xcf, 0xc4, 0xa4, 0x4e, 0x68, 0x46, 0x35, 0x79, 0xa4, 0xef, 0xc3, 0xee, 0xc7, 0xba,
	0x89, 0x03, 0x96, 0x93, 0x7b, 0x68, 0x0c, 0x78, 0xa9, 0xd6, 0xb6, 0x3a, 0x3b, 0xeb, 0x1f, 0xef,
	0x99, 0x55, 0x35, 0x51, 0x65, 0xa8, 0x7c, 0x61, 0x92, 0xaa, 0x53, 0x95, 0x6f, 0xd5, 0xed, 0x4b,
	0x3e, 0xea, 0x5e, 0xfb, 0xc2, 0x24, 0x25, 0x2e, 0x1a, 0x07, 0x2c, 0x77, 0x0c, 0xd7, 0xf0, 0x76,
	0xfe, 0xdd, 0xab, 0x93, 0x46, 0x95, 0x74, 0xbf, 0x8b, 0xcd, 0x2b, 0x4e, 0x9a, 0x68, 0x0c, 0xc6,
	0x53, 0x5b, 0x23, 0x9b, 0x68, 0x3d, 0x13, 0x59, 0x56, 0xd8, 0x40, 0x10, 0x1b, 0x2f, 0x12, 0x21,
	0x58, 0x61, 0xeb, 0x64, 0x03, 0xcd, 0x57, 0x4c, 0x08, 0xdb, 0xe8, 0x3d, 0x99, 0x2d, 0xa8, 0x76,
	0xb1, 0xa0, 0xda, 0xe5, 0x82, 0xc2, 0x9f, 0x05, 0x85, 0x4f, 0x92, 0xc2, 0x57, 0x49, 0xe1, 0x9b,
	0xa4, 0xf0, 0x5d, 0x52, 0x38, 0x97, 0x14, 0x66, 0x92, 0xc2, 0x4f, 0x49, 0xe1, 0x97, 0xa4, 0xda,
	0xa5, 0xa4, 0xf0, 0x65, 0x49, 0xb5, 0xd9, 0x92, 0x6a, 0x17, 0x4b, 0xaa, 0x0d, 0x1b, 0xea, 0x15,
	0x74, 0xff, 0x06, 0x00, 0x00, 0xff, 0xff, 0xfe, 0x05, 0xe9, 0x8e, 0x80, 0x02, 0x00, 0x00,
}

func (x Terrain) String() string {
	s, ok := Terrain_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (this *TileSet) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TileSet)
	if !ok {
		that2, ok := that.(TileSet)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if !this.ID.Equal(that1.ID) {
		return false
	}
	if this.Name != that1.Name {
		return false
	}
	if this.Size_ != that1.Size_ {
		return false
	}
	if this.X != that1.X {
		return false
	}
	if this.Y != that1.Y {
		return false
	}
	if len(this.Terrains) != len(that1.Terrains) {
		return false
	}
	for i := range this.Terrains {
		if this.Terrains[i] != that1.Terrains[i] {
			return false
		}
	}
	return true
}
func (this *TileMap) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TileMap)
	if !ok {
		that2, ok := that.(TileMap)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if !this.Set.Equal(&that1.Set) {
		return false
	}
	if !this.Dim.Equal(&that1.Dim) {
		return false
	}
	if len(this.Map) != len(that1.Map) {
		return false
	}
	for i := range this.Map {
		if this.Map[i] != that1.Map[i] {
			return false
		}
	}
	return true
}
func (this *TileSet) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 10)
	s = append(s, "&space.TileSet{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Name: "+fmt.Sprintf("%#v", this.Name)+",\n")
	s = append(s, "Size_: "+fmt.Sprintf("%#v", this.Size_)+",\n")
	s = append(s, "X: "+fmt.Sprintf("%#v", this.X)+",\n")
	s = append(s, "Y: "+fmt.Sprintf("%#v", this.Y)+",\n")
	keysForTerrains := make([]int32, 0, len(this.Terrains))
	for k, _ := range this.Terrains {
		keysForTerrains = append(keysForTerrains, k)
	}
	github_com_gogo_protobuf_sortkeys.Int32s(keysForTerrains)
	mapStringForTerrains := "map[int32]uint64{"
	for _, k := range keysForTerrains {
		mapStringForTerrains += fmt.Sprintf("%#v: %#v,", k, this.Terrains[k])
	}
	mapStringForTerrains += "}"
	if this.Terrains != nil {
		s = append(s, "Terrains: "+mapStringForTerrains+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *TileMap) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 7)
	s = append(s, "&space.TileMap{")
	s = append(s, "Set: "+strings.Replace(this.Set.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "Dim: "+strings.Replace(this.Dim.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "Map: "+fmt.Sprintf("%#v", this.Map)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringTile(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *TileSet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TileSet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TileSet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Terrains) > 0 {
		for k := range m.Terrains {
			v := m.Terrains[k]
			baseI := i
			i = encodeVarintTile(dAtA, i, uint64(v))
			i--
			dAtA[i] = 0x10
			i = encodeVarintTile(dAtA, i, uint64(k))
			i--
			dAtA[i] = 0x8
			i = encodeVarintTile(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x32
		}
	}
	if m.Y != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.Y))
		i--
		dAtA[i] = 0x28
	}
	if m.X != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.X))
		i--
		dAtA[i] = 0x20
	}
	if m.Size_ != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.Size_))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintTile(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x12
	}
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintTile(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *TileMap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TileMap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TileMap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Map) > 0 {
		dAtA2 := make([]byte, len(m.Map)*10)
		var j1 int
		for _, num := range m.Map {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintTile(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x1a
	}
	{
		size, err := m.Dim.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintTile(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.Set.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintTile(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintTile(dAtA []byte, offset int, v uint64) int {
	offset -= sovTile(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedTileSet(r randyTile, easy bool) *TileSet {
	this := &TileSet{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v1
	this.Name = string(randStringTile(r))
	this.Size_ = uint64(uint64(r.Uint32()))
	this.X = uint64(uint64(r.Uint32()))
	this.Y = uint64(uint64(r.Uint32()))
	if r.Intn(5) != 0 {
		v2 := r.Intn(10)
		this.Terrains = make(map[int32]uint64)
		for i := 0; i < v2; i++ {
			v3 := int32(r.Int31())
			this.Terrains[v3] = uint64(uint64(r.Uint32()))
		}
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedTileMap(r randyTile, easy bool) *TileMap {
	this := &TileMap{}
	v4 := NewPopulatedTileSet(r, easy)
	this.Set = *v4
	v5 := geometry.NewPopulatedVec3(r, easy)
	this.Dim = *v5
	v6 := r.Intn(10)
	this.Map = make([]Terrain, v6)
	for i := 0; i < v6; i++ {
		this.Map[i] = Terrain([]int32{0, 1, 2, 3}[r.Intn(4)])
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyTile interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneTile(r randyTile) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringTile(r randyTile) string {
	v7 := r.Intn(100)
	tmps := make([]rune, v7)
	for i := 0; i < v7; i++ {
		tmps[i] = randUTF8RuneTile(r)
	}
	return string(tmps)
}
func randUnrecognizedTile(r randyTile, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldTile(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldTile(dAtA []byte, r randyTile, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateTile(dAtA, uint64(key))
		v8 := r.Int63()
		if r.Intn(2) == 0 {
			v8 *= -1
		}
		dAtA = encodeVarintPopulateTile(dAtA, uint64(v8))
	case 1:
		dAtA = encodeVarintPopulateTile(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateTile(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateTile(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateTile(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateTile(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *TileSet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovTile(uint64(l))
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovTile(uint64(l))
	}
	if m.Size_ != 0 {
		n += 1 + sovTile(uint64(m.Size_))
	}
	if m.X != 0 {
		n += 1 + sovTile(uint64(m.X))
	}
	if m.Y != 0 {
		n += 1 + sovTile(uint64(m.Y))
	}
	if len(m.Terrains) > 0 {
		for k, v := range m.Terrains {
			_ = k
			_ = v
			mapEntrySize := 1 + sovTile(uint64(k)) + 1 + sovTile(uint64(v))
			n += mapEntrySize + 1 + sovTile(uint64(mapEntrySize))
		}
	}
	return n
}

func (m *TileMap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Set.Size()
	n += 1 + l + sovTile(uint64(l))
	l = m.Dim.Size()
	n += 1 + l + sovTile(uint64(l))
	if len(m.Map) > 0 {
		l = 0
		for _, e := range m.Map {
			l += sovTile(uint64(e))
		}
		n += 1 + sovTile(uint64(l)) + l
	}
	return n
}

func sovTile(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTile(x uint64) (n int) {
	return sovTile(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *TileSet) String() string {
	if this == nil {
		return "nil"
	}
	keysForTerrains := make([]int32, 0, len(this.Terrains))
	for k, _ := range this.Terrains {
		keysForTerrains = append(keysForTerrains, k)
	}
	github_com_gogo_protobuf_sortkeys.Int32s(keysForTerrains)
	mapStringForTerrains := "map[int32]uint64{"
	for _, k := range keysForTerrains {
		mapStringForTerrains += fmt.Sprintf("%v: %v,", k, this.Terrains[k])
	}
	mapStringForTerrains += "}"
	s := strings.Join([]string{`&TileSet{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`Size_:` + fmt.Sprintf("%v", this.Size_) + `,`,
		`X:` + fmt.Sprintf("%v", this.X) + `,`,
		`Y:` + fmt.Sprintf("%v", this.Y) + `,`,
		`Terrains:` + mapStringForTerrains + `,`,
		`}`,
	}, "")
	return s
}
func (this *TileMap) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&TileMap{`,
		`Set:` + strings.Replace(strings.Replace(this.Set.String(), "TileSet", "TileSet", 1), `&`, ``, 1) + `,`,
		`Dim:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Dim), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`Map:` + fmt.Sprintf("%v", this.Map) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringTile(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *TileSet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTile
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TileSet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TileSet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthTile
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTile
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Size_", wireType)
			}
			m.Size_ = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Size_ |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field X", wireType)
			}
			m.X = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.X |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Y", wireType)
			}
			m.Y = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Y |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Terrains", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTile
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Terrains == nil {
				m.Terrains = make(map[int32]uint64)
			}
			var mapkey int32
			var mapvalue uint64
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowTile
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					wire |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				fieldNum := int32(wire >> 3)
				if fieldNum == 1 {
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowTile
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						mapkey |= int32(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
				} else if fieldNum == 2 {
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowTile
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						mapvalue |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipTile(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if skippy < 0 {
						return ErrInvalidLengthTile
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Terrains[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTile(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTile
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTile
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *TileMap) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTile
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TileMap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TileMap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Set", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTile
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Set.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dim", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTile
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTile
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Dim.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType == 0 {
				var v Terrain
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowTile
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= Terrain(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Map = append(m.Map, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowTile
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthTile
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthTile
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				if elementCount != 0 && len(m.Map) == 0 {
					m.Map = make([]Terrain, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v Terrain
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowTile
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= Terrain(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Map = append(m.Map, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Map", wireType)
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTile(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTile
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTile
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTile(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTile
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTile
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTile
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTile
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTile
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTile
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTile        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTile          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTile = fmt.Errorf("proto: unexpected end of group")
)
