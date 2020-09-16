// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/space/dto/tile.proto

package dto

import (
	fmt "fmt"
	dto "github.com/elojah/game_02/pkg/account/dto"
	geometry "github.com/elojah/game_02/pkg/geometry"
	space "github.com/elojah/game_02/pkg/space"
	github_com_elojah_game_02_pkg_ulid "github.com/elojah/game_02/pkg/ulid"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
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

type CreateMap struct {
	Dimensions        geometry.Vec3 `protobuf:"bytes,1,opt,name=Dimensions,proto3" json:"Dimensions"`
	NPlatforms        uint64        `protobuf:"varint,2,opt,name=NPlatforms,proto3" json:"NPlatforms,omitempty"`
	PlatformSize      uint64        `protobuf:"varint,3,opt,name=PlatformSize,proto3" json:"PlatformSize,omitempty"`
	PlatformVariance  uint64        `protobuf:"varint,4,opt,name=PlatformVariance,proto3" json:"PlatformVariance,omitempty"`
	NPaths            uint64        `protobuf:"varint,5,opt,name=NPaths,proto3" json:"NPaths,omitempty"`
	PathVariance      uint64        `protobuf:"varint,6,opt,name=PathVariance,proto3" json:"PathVariance,omitempty"`
	PathWidth         uint64        `protobuf:"varint,7,opt,name=PathWidth,proto3" json:"PathWidth,omitempty"`
	PathWidthVariance uint64        `protobuf:"varint,8,opt,name=PathWidthVariance,proto3" json:"PathWidthVariance,omitempty"`
}

func (m *CreateMap) Reset()      { *m = CreateMap{} }
func (*CreateMap) ProtoMessage() {}
func (*CreateMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c20068a2f3ea97d, []int{0}
}
func (m *CreateMap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreateMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreateMap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreateMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateMap.Merge(m, src)
}
func (m *CreateMap) XXX_Size() int {
	return m.Size()
}
func (m *CreateMap) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateMap.DiscardUnknown(m)
}

var xxx_messageInfo_CreateMap proto.InternalMessageInfo

func (m *CreateMap) GetDimensions() geometry.Vec3 {
	if m != nil {
		return m.Dimensions
	}
	return geometry.Vec3{}
}

func (m *CreateMap) GetNPlatforms() uint64 {
	if m != nil {
		return m.NPlatforms
	}
	return 0
}

func (m *CreateMap) GetPlatformSize() uint64 {
	if m != nil {
		return m.PlatformSize
	}
	return 0
}

func (m *CreateMap) GetPlatformVariance() uint64 {
	if m != nil {
		return m.PlatformVariance
	}
	return 0
}

func (m *CreateMap) GetNPaths() uint64 {
	if m != nil {
		return m.NPaths
	}
	return 0
}

func (m *CreateMap) GetPathVariance() uint64 {
	if m != nil {
		return m.PathVariance
	}
	return 0
}

func (m *CreateMap) GetPathWidth() uint64 {
	if m != nil {
		return m.PathWidth
	}
	return 0
}

func (m *CreateMap) GetPathWidthVariance() uint64 {
	if m != nil {
		return m.PathWidthVariance
	}
	return 0
}

type CreateSet struct {
	Auth dto.Auth                              `protobuf:"bytes,1,opt,name=Auth,proto3" json:"Auth"`
	ID   github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,2,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	Set  space.TileSet                         `protobuf:"bytes,3,opt,name=Set,proto3" json:"Set"`
}

func (m *CreateSet) Reset()      { *m = CreateSet{} }
func (*CreateSet) ProtoMessage() {}
func (*CreateSet) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c20068a2f3ea97d, []int{1}
}
func (m *CreateSet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreateSet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreateSet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreateSet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateSet.Merge(m, src)
}
func (m *CreateSet) XXX_Size() int {
	return m.Size()
}
func (m *CreateSet) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateSet.DiscardUnknown(m)
}

var xxx_messageInfo_CreateSet proto.InternalMessageInfo

func (m *CreateSet) GetAuth() dto.Auth {
	if m != nil {
		return m.Auth
	}
	return dto.Auth{}
}

func (m *CreateSet) GetSet() space.TileSet {
	if m != nil {
		return m.Set
	}
	return space.TileSet{}
}

type ListSet struct {
	Auth dto.Auth                                `protobuf:"bytes,1,opt,name=Auth,proto3" json:"Auth"`
	IDs  []github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,2,rep,name=IDs,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"IDs"`
}

func (m *ListSet) Reset()      { *m = ListSet{} }
func (*ListSet) ProtoMessage() {}
func (*ListSet) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c20068a2f3ea97d, []int{2}
}
func (m *ListSet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ListSet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ListSet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ListSet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListSet.Merge(m, src)
}
func (m *ListSet) XXX_Size() int {
	return m.Size()
}
func (m *ListSet) XXX_DiscardUnknown() {
	xxx_messageInfo_ListSet.DiscardUnknown(m)
}

var xxx_messageInfo_ListSet proto.InternalMessageInfo

func (m *ListSet) GetAuth() dto.Auth {
	if m != nil {
		return m.Auth
	}
	return dto.Auth{}
}

func init() {
	proto.RegisterType((*CreateMap)(nil), "dto.CreateMap")
	proto.RegisterType((*CreateSet)(nil), "dto.CreateSet")
	proto.RegisterType((*ListSet)(nil), "dto.ListSet")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/space/dto/tile.proto", fileDescriptor_1c20068a2f3ea97d)
}

var fileDescriptor_1c20068a2f3ea97d = []byte{
	// 479 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x52, 0x31, 0x6f, 0xd3, 0x40,
	0x14, 0xf6, 0xc5, 0x21, 0x25, 0x47, 0x85, 0xe0, 0x06, 0x64, 0x55, 0xe8, 0xb5, 0x0a, 0x02, 0x55,
	0x88, 0xda, 0x28, 0x05, 0x31, 0x21, 0x20, 0x78, 0x89, 0x04, 0x55, 0x95, 0xa0, 0x32, 0xa2, 0x8b,
	0x7d, 0xb5, 0x0f, 0xec, 0x5c, 0x64, 0x3f, 0x0f, 0x30, 0xf1, 0x13, 0xd8, 0xf8, 0x0b, 0xfc, 0x04,
	0xd8, 0x18, 0x3b, 0x66, 0xac, 0x18, 0x2a, 0x72, 0x59, 0x18, 0x3b, 0x32, 0x22, 0x1f, 0x8e, 0x1b,
	0x54, 0x29, 0x2a, 0xdb, 0xfb, 0xbe, 0xf7, 0x7d, 0x7e, 0xef, 0xbe, 0x67, 0xda, 0x8d, 0x24, 0xc6,
	0xc5, 0xc8, 0x0d, 0x54, 0xea, 0x89, 0x44, 0xbd, 0xe5, 0xb1, 0x17, 0xf1, 0x54, 0xbc, 0xb9, 0xdf,
	0xf5, 0x26, 0xef, 0x22, 0x2f, 0x9f, 0xf0, 0x40, 0x78, 0x21, 0x2a, 0x0f, 0x65, 0x22, 0xdc, 0x49,
	0xa6, 0x50, 0x31, 0x3b, 0x44, 0xb5, 0xb1, 0xb3, 0x64, 0x8c, 0x54, 0xa4, 0x3c, 0xd3, 0x1b, 0x15,
	0x87, 0x06, 0x19, 0x60, 0xaa, 0xbf, 0x9e, 0x8d, 0x87, 0xab, 0xe7, 0x44, 0x42, 0xa5, 0x02, 0xb3,
	0xf7, 0x75, 0x51, 0xd9, 0x1e, 0xad, 0xb6, 0xf1, 0x20, 0x50, 0xc5, 0x18, 0xcd, 0x82, 0x55, 0x5d,
	0x19, 0xdd, 0x8b, 0xbc, 0xeb, 0xec, 0x4d, 0x9d, 0x6f, 0x0d, 0xda, 0x7e, 0x9e, 0x09, 0x8e, 0xe2,
	0x25, 0x9f, 0xb0, 0x07, 0x94, 0xfa, 0x32, 0x15, 0xe3, 0x5c, 0xaa, 0x71, 0xee, 0x90, 0x2d, 0xb2,
	0x7d, 0xa5, 0x7b, 0xd5, 0xad, 0x77, 0x3b, 0x10, 0xc1, 0x6e, 0xaf, 0x79, 0x74, 0xb2, 0x69, 0x0d,
	0x96, 0x74, 0x0c, 0x28, 0xdd, 0xdb, 0x4f, 0x38, 0x1e, 0xaa, 0x2c, 0xcd, 0x9d, 0xc6, 0x16, 0xd9,
	0x6e, 0x0e, 0x96, 0x18, 0xd6, 0xa1, 0xeb, 0x0b, 0x30, 0x94, 0x1f, 0x84, 0x63, 0x1b, 0xc5, 0x3f,
	0x1c, 0xbb, 0x4b, 0xaf, 0x2d, 0xf0, 0x01, 0xcf, 0x24, 0x1f, 0x07, 0xc2, 0x69, 0x1a, 0xdd, 0x39,
	0x9e, 0xdd, 0xa0, 0xad, 0xbd, 0x7d, 0x8e, 0x71, 0xee, 0x5c, 0x32, 0x8a, 0x0a, 0x99, 0x39, 0x1c,
	0xe3, 0xda, 0xdf, 0xaa, 0xe6, 0x2c, 0x71, 0xec, 0x26, 0x6d, 0x97, 0xf8, 0xb5, 0x0c, 0x31, 0x76,
	0xd6, 0x8c, 0xe0, 0x8c, 0x60, 0xf7, 0xe8, 0xf5, 0x1a, 0xd4, 0x9f, 0xb9, 0x6c, 0x54, 0xe7, 0x1b,
	0x9d, 0xcf, 0x64, 0x91, 0xdd, 0x50, 0x20, 0xbb, 0x45, 0x9b, 0xcf, 0x0a, 0x8c, 0xab, 0xd4, 0xda,
	0x6e, 0x88, 0xca, 0x2d, 0x89, 0x2a, 0x30, 0xd3, 0x64, 0x8f, 0x69, 0xa3, 0xef, 0x9b, 0x88, 0xd6,
	0x7b, 0x3b, 0x25, 0xff, 0xe3, 0x64, 0xf3, 0xf6, 0xea, 0x93, 0x15, 0x89, 0x0c, 0xdd, 0xbe, 0x3f,
	0x68, 0xf4, 0x7d, 0x76, 0x87, 0xda, 0x43, 0x81, 0x26, 0xc0, 0xf2, 0x30, 0xe6, 0x9a, 0xee, 0x2b,
	0x99, 0x94, 0x0b, 0x54, 0x73, 0x4a, 0x41, 0x47, 0xd1, 0xb5, 0x17, 0x32, 0xc7, 0x0b, 0xaf, 0xf5,
	0x84, 0xda, 0x7d, 0xbf, 0x3c, 0x9d, 0xfd, 0xff, 0x7b, 0x95, 0xce, 0xde, 0xd3, 0xe9, 0x0c, 0xac,
	0xe3, 0x19, 0x58, 0xa7, 0x33, 0x20, 0xbf, 0x67, 0x40, 0x3e, 0x6a, 0x20, 0x5f, 0x34, 0x90, 0xaf,
	0x1a, 0xc8, 0x77, 0x0d, 0xe4, 0x48, 0x03, 0x99, 0x6a, 0x20, 0x3f, 0x35, 0x90, 0x5f, 0x1a, 0xac,
	0x53, 0x0d, 0xe4, 0xd3, 0x1c, 0xac, 0xe9, 0x1c, 0xac, 0xe3, 0x39, 0x58, 0xa3, 0x96, 0xf9, 0x1f,
	0x77, 0xff, 0x04, 0x00, 0x00, 0xff, 0xff, 0xe0, 0x20, 0x43, 0x92, 0x99, 0x03, 0x00, 0x00,
}

func (this *CreateMap) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*CreateMap)
	if !ok {
		that2, ok := that.(CreateMap)
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
	if !this.Dimensions.Equal(&that1.Dimensions) {
		return false
	}
	if this.NPlatforms != that1.NPlatforms {
		return false
	}
	if this.PlatformSize != that1.PlatformSize {
		return false
	}
	if this.PlatformVariance != that1.PlatformVariance {
		return false
	}
	if this.NPaths != that1.NPaths {
		return false
	}
	if this.PathVariance != that1.PathVariance {
		return false
	}
	if this.PathWidth != that1.PathWidth {
		return false
	}
	if this.PathWidthVariance != that1.PathWidthVariance {
		return false
	}
	return true
}
func (this *CreateSet) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*CreateSet)
	if !ok {
		that2, ok := that.(CreateSet)
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
	if !this.Auth.Equal(&that1.Auth) {
		return false
	}
	if !this.ID.Equal(that1.ID) {
		return false
	}
	if !this.Set.Equal(&that1.Set) {
		return false
	}
	return true
}
func (this *ListSet) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ListSet)
	if !ok {
		that2, ok := that.(ListSet)
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
	if !this.Auth.Equal(&that1.Auth) {
		return false
	}
	if len(this.IDs) != len(that1.IDs) {
		return false
	}
	for i := range this.IDs {
		if !this.IDs[i].Equal(that1.IDs[i]) {
			return false
		}
	}
	return true
}
func (this *CreateMap) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 12)
	s = append(s, "&dto.CreateMap{")
	s = append(s, "Dimensions: "+strings.Replace(this.Dimensions.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "NPlatforms: "+fmt.Sprintf("%#v", this.NPlatforms)+",\n")
	s = append(s, "PlatformSize: "+fmt.Sprintf("%#v", this.PlatformSize)+",\n")
	s = append(s, "PlatformVariance: "+fmt.Sprintf("%#v", this.PlatformVariance)+",\n")
	s = append(s, "NPaths: "+fmt.Sprintf("%#v", this.NPaths)+",\n")
	s = append(s, "PathVariance: "+fmt.Sprintf("%#v", this.PathVariance)+",\n")
	s = append(s, "PathWidth: "+fmt.Sprintf("%#v", this.PathWidth)+",\n")
	s = append(s, "PathWidthVariance: "+fmt.Sprintf("%#v", this.PathWidthVariance)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *CreateSet) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 7)
	s = append(s, "&dto.CreateSet{")
	s = append(s, "Auth: "+strings.Replace(this.Auth.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Set: "+strings.Replace(this.Set.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *ListSet) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&dto.ListSet{")
	s = append(s, "Auth: "+strings.Replace(this.Auth.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "IDs: "+fmt.Sprintf("%#v", this.IDs)+",\n")
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
func (m *CreateMap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreateMap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreateMap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.PathWidthVariance != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.PathWidthVariance))
		i--
		dAtA[i] = 0x40
	}
	if m.PathWidth != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.PathWidth))
		i--
		dAtA[i] = 0x38
	}
	if m.PathVariance != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.PathVariance))
		i--
		dAtA[i] = 0x30
	}
	if m.NPaths != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.NPaths))
		i--
		dAtA[i] = 0x28
	}
	if m.PlatformVariance != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.PlatformVariance))
		i--
		dAtA[i] = 0x20
	}
	if m.PlatformSize != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.PlatformSize))
		i--
		dAtA[i] = 0x18
	}
	if m.NPlatforms != 0 {
		i = encodeVarintTile(dAtA, i, uint64(m.NPlatforms))
		i--
		dAtA[i] = 0x10
	}
	{
		size, err := m.Dimensions.MarshalToSizedBuffer(dAtA[:i])
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

func (m *CreateSet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreateSet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreateSet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Set.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintTile(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintTile(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.Auth.MarshalToSizedBuffer(dAtA[:i])
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

func (m *ListSet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ListSet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ListSet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.IDs) > 0 {
		for iNdEx := len(m.IDs) - 1; iNdEx >= 0; iNdEx-- {
			{
				size := m.IDs[iNdEx].Size()
				i -= size
				if _, err := m.IDs[iNdEx].MarshalTo(dAtA[i:]); err != nil {
					return 0, err
				}
				i = encodeVarintTile(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Auth.MarshalToSizedBuffer(dAtA[:i])
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
func NewPopulatedCreateMap(r randyTile, easy bool) *CreateMap {
	this := &CreateMap{}
	v1 := geometry.NewPopulatedVec3(r, easy)
	this.Dimensions = *v1
	this.NPlatforms = uint64(uint64(r.Uint32()))
	this.PlatformSize = uint64(uint64(r.Uint32()))
	this.PlatformVariance = uint64(uint64(r.Uint32()))
	this.NPaths = uint64(uint64(r.Uint32()))
	this.PathVariance = uint64(uint64(r.Uint32()))
	this.PathWidth = uint64(uint64(r.Uint32()))
	this.PathWidthVariance = uint64(uint64(r.Uint32()))
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedCreateSet(r randyTile, easy bool) *CreateSet {
	this := &CreateSet{}
	v2 := dto.NewPopulatedAuth(r, easy)
	this.Auth = *v2
	v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v3
	v4 := space.NewPopulatedTileSet(r, easy)
	this.Set = *v4
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedListSet(r randyTile, easy bool) *ListSet {
	this := &ListSet{}
	v5 := dto.NewPopulatedAuth(r, easy)
	this.Auth = *v5
	v6 := r.Intn(10)
	this.IDs = make([]github_com_elojah_game_02_pkg_ulid.ID, v6)
	for i := 0; i < v6; i++ {
		v7 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
		this.IDs[i] = *v7
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
	v8 := r.Intn(100)
	tmps := make([]rune, v8)
	for i := 0; i < v8; i++ {
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
		v9 := r.Int63()
		if r.Intn(2) == 0 {
			v9 *= -1
		}
		dAtA = encodeVarintPopulateTile(dAtA, uint64(v9))
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
func (m *CreateMap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Dimensions.Size()
	n += 1 + l + sovTile(uint64(l))
	if m.NPlatforms != 0 {
		n += 1 + sovTile(uint64(m.NPlatforms))
	}
	if m.PlatformSize != 0 {
		n += 1 + sovTile(uint64(m.PlatformSize))
	}
	if m.PlatformVariance != 0 {
		n += 1 + sovTile(uint64(m.PlatformVariance))
	}
	if m.NPaths != 0 {
		n += 1 + sovTile(uint64(m.NPaths))
	}
	if m.PathVariance != 0 {
		n += 1 + sovTile(uint64(m.PathVariance))
	}
	if m.PathWidth != 0 {
		n += 1 + sovTile(uint64(m.PathWidth))
	}
	if m.PathWidthVariance != 0 {
		n += 1 + sovTile(uint64(m.PathWidthVariance))
	}
	return n
}

func (m *CreateSet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Auth.Size()
	n += 1 + l + sovTile(uint64(l))
	l = m.ID.Size()
	n += 1 + l + sovTile(uint64(l))
	l = m.Set.Size()
	n += 1 + l + sovTile(uint64(l))
	return n
}

func (m *ListSet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Auth.Size()
	n += 1 + l + sovTile(uint64(l))
	if len(m.IDs) > 0 {
		for _, e := range m.IDs {
			l = e.Size()
			n += 1 + l + sovTile(uint64(l))
		}
	}
	return n
}

func sovTile(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTile(x uint64) (n int) {
	return sovTile(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *CreateMap) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&CreateMap{`,
		`Dimensions:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Dimensions), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`NPlatforms:` + fmt.Sprintf("%v", this.NPlatforms) + `,`,
		`PlatformSize:` + fmt.Sprintf("%v", this.PlatformSize) + `,`,
		`PlatformVariance:` + fmt.Sprintf("%v", this.PlatformVariance) + `,`,
		`NPaths:` + fmt.Sprintf("%v", this.NPaths) + `,`,
		`PathVariance:` + fmt.Sprintf("%v", this.PathVariance) + `,`,
		`PathWidth:` + fmt.Sprintf("%v", this.PathWidth) + `,`,
		`PathWidthVariance:` + fmt.Sprintf("%v", this.PathWidthVariance) + `,`,
		`}`,
	}, "")
	return s
}
func (this *CreateSet) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&CreateSet{`,
		`Auth:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Auth), "Auth", "dto.Auth", 1), `&`, ``, 1) + `,`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Set:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Set), "TileSet", "space.TileSet", 1), `&`, ``, 1) + `,`,
		`}`,
	}, "")
	return s
}
func (this *ListSet) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&ListSet{`,
		`Auth:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Auth), "Auth", "dto.Auth", 1), `&`, ``, 1) + `,`,
		`IDs:` + fmt.Sprintf("%v", this.IDs) + `,`,
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
func (m *CreateMap) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: CreateMap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreateMap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dimensions", wireType)
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
			if err := m.Dimensions.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NPlatforms", wireType)
			}
			m.NPlatforms = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NPlatforms |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlatformSize", wireType)
			}
			m.PlatformSize = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PlatformSize |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlatformVariance", wireType)
			}
			m.PlatformVariance = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PlatformVariance |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NPaths", wireType)
			}
			m.NPaths = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NPaths |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PathVariance", wireType)
			}
			m.PathVariance = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PathVariance |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PathWidth", wireType)
			}
			m.PathWidth = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PathWidth |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PathWidthVariance", wireType)
			}
			m.PathWidthVariance = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTile
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PathWidthVariance |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
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
func (m *CreateSet) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: CreateSet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreateSet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Auth", wireType)
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
			if err := m.Auth.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
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
		case 3:
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
func (m *ListSet) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: ListSet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ListSet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Auth", wireType)
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
			if err := m.Auth.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IDs", wireType)
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
			var v github_com_elojah_game_02_pkg_ulid.ID
			m.IDs = append(m.IDs, v)
			if err := m.IDs[len(m.IDs)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
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
