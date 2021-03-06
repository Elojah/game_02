// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/entity/entity.proto

package entity

import (
	fmt "fmt"
	geometry "github.com/elojah/game_02/pkg/geometry"
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

type Cast struct {
	AbilityID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=AbilityID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"AbilityID"`
	TS        uint64                                `protobuf:"varint,2,opt,name=TS,proto3" json:"TS,omitempty"`
}

func (m *Cast) Reset()      { *m = Cast{} }
func (*Cast) ProtoMessage() {}
func (*Cast) Descriptor() ([]byte, []int) {
	return fileDescriptor_8c2291fd67b816a9, []int{0}
}
func (m *Cast) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Cast) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Cast.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Cast) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Cast.Merge(m, src)
}
func (m *Cast) XXX_Size() int {
	return m.Size()
}
func (m *Cast) XXX_DiscardUnknown() {
	xxx_messageInfo_Cast.DiscardUnknown(m)
}

var xxx_messageInfo_Cast proto.InternalMessageInfo

func (m *Cast) GetTS() uint64 {
	if m != nil {
		return m.TS
	}
	return 0
}

type E struct {
	// #Identifiers
	ID         github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	TemplateID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,2,opt,name=TemplateID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"TemplateID"`
	Name       string                                `protobuf:"bytes,3,opt,name=Name,proto3" json:"Name,omitempty"`
	// owner is nil if entity is controlled by player, else it will be pc entity id.
	OwnerID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,4,opt,name=OwnerID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"OwnerID"`
	// #Stats
	Dead  bool   `protobuf:"varint,5,opt,name=Dead,proto3" json:"Dead,omitempty"`
	HP    uint64 `protobuf:"varint,6,opt,name=HP,proto3" json:"HP,omitempty"`
	MaxHP uint64 `protobuf:"varint,7,opt,name=MaxHP,proto3" json:"MaxHP,omitempty"`
	MP    uint64 `protobuf:"varint,8,opt,name=MP,proto3" json:"MP,omitempty"`
	MaxMP uint64 `protobuf:"varint,9,opt,name=MaxMP,proto3" json:"MaxMP,omitempty"`
	// #Spatial & graphic parameters
	Direction geometry.Vec3                         `protobuf:"bytes,10,opt,name=Direction,proto3" json:"Direction"`
	Position  geometry.Vec3                         `protobuf:"bytes,11,opt,name=Position,proto3" json:"Position"`
	Cast      *Cast                                 `protobuf:"bytes,12,opt,name=Cast,proto3" json:"Cast,omitempty"`
	AssetID   github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,13,opt,name=AssetID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"AssetID"`
	// #In game external ids
	InventoryID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,14,opt,name=InventoryID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"InventoryID"`
	SpawnID     github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,15,opt,name=SpawnID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"SpawnID"`
	// Timestamp of entity state.
	TS uint64 `protobuf:"varint,16,opt,name=TS,proto3" json:"TS,omitempty"`
	// State is a technical requirement for redis set, each "state" of entity must be unique.
	State github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,17,opt,name=State,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"State"`
}

func (m *E) Reset()      { *m = E{} }
func (*E) ProtoMessage() {}
func (*E) Descriptor() ([]byte, []int) {
	return fileDescriptor_8c2291fd67b816a9, []int{1}
}
func (m *E) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *E) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_E.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *E) XXX_Merge(src proto.Message) {
	xxx_messageInfo_E.Merge(m, src)
}
func (m *E) XXX_Size() int {
	return m.Size()
}
func (m *E) XXX_DiscardUnknown() {
	xxx_messageInfo_E.DiscardUnknown(m)
}

var xxx_messageInfo_E proto.InternalMessageInfo

func (m *E) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *E) GetDead() bool {
	if m != nil {
		return m.Dead
	}
	return false
}

func (m *E) GetHP() uint64 {
	if m != nil {
		return m.HP
	}
	return 0
}

func (m *E) GetMaxHP() uint64 {
	if m != nil {
		return m.MaxHP
	}
	return 0
}

func (m *E) GetMP() uint64 {
	if m != nil {
		return m.MP
	}
	return 0
}

func (m *E) GetMaxMP() uint64 {
	if m != nil {
		return m.MaxMP
	}
	return 0
}

func (m *E) GetDirection() geometry.Vec3 {
	if m != nil {
		return m.Direction
	}
	return geometry.Vec3{}
}

func (m *E) GetPosition() geometry.Vec3 {
	if m != nil {
		return m.Position
	}
	return geometry.Vec3{}
}

func (m *E) GetCast() *Cast {
	if m != nil {
		return m.Cast
	}
	return nil
}

func (m *E) GetTS() uint64 {
	if m != nil {
		return m.TS
	}
	return 0
}

func init() {
	proto.RegisterType((*Cast)(nil), "entity.Cast")
	proto.RegisterType((*E)(nil), "entity.E")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/entity/entity.proto", fileDescriptor_8c2291fd67b816a9)
}

var fileDescriptor_8c2291fd67b816a9 = []byte{
	// 509 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x93, 0x3f, 0x6f, 0xd3, 0x40,
	0x18, 0xc6, 0x7d, 0xc6, 0xcd, 0x9f, 0x4b, 0x08, 0x70, 0x62, 0x38, 0x75, 0xb8, 0x5a, 0x95, 0x40,
	0x5e, 0x6a, 0x97, 0x54, 0x8c, 0x48, 0x34, 0x35, 0x6a, 0x2c, 0x64, 0x6a, 0x39, 0x11, 0x2b, 0x72,
	0xd2, 0xc3, 0x35, 0xc4, 0xbe, 0xc8, 0xb9, 0x50, 0xb2, 0xf1, 0x11, 0x18, 0xf8, 0x10, 0x7c, 0x04,
	0x46, 0xc6, 0x8e, 0x19, 0x2b, 0x86, 0x8a, 0x38, 0x0b, 0x63, 0x47, 0x46, 0xe4, 0x3b, 0x27, 0xcd,
	0x14, 0x09, 0x4f, 0x7e, 0xdf, 0xf3, 0xf3, 0xfc, 0xfc, 0xea, 0xf5, 0x73, 0xf0, 0x59, 0x18, 0xf1,
	0x8b, 0xe9, 0xc0, 0x1c, 0xb2, 0xd8, 0xa2, 0x23, 0xf6, 0x21, 0xb8, 0xb0, 0xc2, 0x20, 0xa6, 0xef,
	0x0e, 0xdb, 0xd6, 0xf8, 0x63, 0x68, 0xd1, 0x84, 0x47, 0x7c, 0x56, 0x3c, 0xcc, 0x71, 0xca, 0x38,
	0x43, 0x15, 0xd9, 0xed, 0x1e, 0x6c, 0x58, 0x43, 0x16, 0x32, 0x4b, 0xbc, 0x1e, 0x4c, 0xdf, 0x8b,
	0x4e, 0x34, 0xa2, 0x92, 0xb6, 0xdd, 0xe7, 0xdb, 0xbf, 0x14, 0x52, 0x16, 0x53, 0x9e, 0xce, 0xd6,
	0x85, 0xb4, 0xed, 0x0f, 0xa1, 0x76, 0x12, 0x4c, 0x38, 0x7a, 0x0d, 0xeb, 0xc7, 0x83, 0x68, 0x14,
	0xf1, 0x99, 0x63, 0x63, 0xa0, 0x03, 0xa3, 0xd9, 0x39, 0xb8, 0xba, 0xd9, 0x53, 0x7e, 0xdd, 0xec,
	0x3d, 0xd9, 0x4e, 0x9e, 0x8e, 0xa2, 0x73, 0xd3, 0xb1, 0xfd, 0x3b, 0x3f, 0x6a, 0x41, 0xb5, 0xdf,
	0xc3, 0xaa, 0x0e, 0x0c, 0xcd, 0x57, 0xfb, 0xbd, 0xfd, 0x6f, 0x15, 0x08, 0x5e, 0xa1, 0x17, 0x50,
	0x2d, 0xcb, 0x56, 0x1d, 0x1b, 0xb9, 0x10, 0xf6, 0x69, 0x3c, 0x1e, 0x05, 0x9c, 0x3a, 0xb6, 0x80,
	0xff, 0x37, 0x66, 0x03, 0x80, 0x10, 0xd4, 0xde, 0x04, 0x31, 0xc5, 0xf7, 0x74, 0x60, 0xd4, 0x7d,
	0x51, 0xa3, 0x53, 0x58, 0x3d, 0xbb, 0x4c, 0x68, 0xea, 0xd8, 0x58, 0x2b, 0xc3, 0x5f, 0xb9, 0x73,
	0xb8, 0x4d, 0x83, 0x73, 0xbc, 0xa3, 0x03, 0xa3, 0xe6, 0x8b, 0x3a, 0x5f, 0x4a, 0xd7, 0xc3, 0x15,
	0xb9, 0x94, 0xae, 0x87, 0x1e, 0xc3, 0x1d, 0x37, 0xf8, 0xdc, 0xf5, 0x70, 0x55, 0x1c, 0xc9, 0x26,
	0x57, 0xb9, 0x1e, 0xae, 0x49, 0x95, 0xbb, 0x52, 0xb9, 0x1e, 0xae, 0xaf, 0x55, 0xae, 0x87, 0xda,
	0xb0, 0x6e, 0x47, 0x29, 0x1d, 0xf2, 0x88, 0x25, 0x18, 0xea, 0xc0, 0x68, 0xb4, 0x5b, 0xe6, 0xfa,
	0xcf, 0xbe, 0xa5, 0xc3, 0xa3, 0x8e, 0x96, 0x8f, 0xee, 0xdf, 0xc9, 0xd0, 0x21, 0xac, 0x79, 0x6c,
	0x12, 0x09, 0x4b, 0x63, 0x8b, 0x65, 0xad, 0x42, 0x4f, 0x65, 0x36, 0x70, 0x53, 0xa8, 0x9b, 0x66,
	0x11, 0xd3, 0xfc, 0x4c, 0x68, 0x81, 0x2f, 0xb3, 0x73, 0x0a, 0xab, 0xc7, 0x93, 0x09, 0xe5, 0x8e,
	0x8d, 0xef, 0x97, 0x5a, 0x5b, 0xe1, 0x46, 0x67, 0xb0, 0xe1, 0x24, 0x9f, 0x68, 0xc2, 0x59, 0x9a,
	0xc7, 0xb0, 0x55, 0x06, 0xb6, 0x49, 0xc8, 0x27, 0xeb, 0x8d, 0x83, 0xcb, 0xc4, 0xb1, 0xf1, 0x83,
	0x52, 0x93, 0x15, 0xee, 0x22, 0xd1, 0x0f, 0x57, 0x89, 0x46, 0x27, 0x70, 0xa7, 0xc7, 0x03, 0x4e,
	0xf1, 0xa3, 0x32, 0x58, 0xe9, 0xed, 0xbc, 0x9c, 0x2f, 0x88, 0x72, 0xbd, 0x20, 0xca, 0xed, 0x82,
	0x80, 0xbf, 0x0b, 0x02, 0xbe, 0x64, 0x04, 0x7c, 0xcf, 0x08, 0xf8, 0x91, 0x11, 0xf0, 0x33, 0x23,
	0xe0, 0x2a, 0x23, 0x60, 0x9e, 0x11, 0xf0, 0x3b, 0x23, 0xe0, 0x4f, 0x46, 0x94, 0xdb, 0x8c, 0x80,
	0xaf, 0x4b, 0xa2, 0xcc, 0x97, 0x44, 0xb9, 0x5e, 0x12, 0x65, 0x50, 0x11, 0x97, 0xf8, 0xe8, 0x5f,
	0x00, 0x00, 0x00, 0xff, 0xff, 0x85, 0xc2, 0xde, 0x33, 0x67, 0x04, 0x00, 0x00,
}

func (this *Cast) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Cast)
	if !ok {
		that2, ok := that.(Cast)
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
	if !this.AbilityID.Equal(that1.AbilityID) {
		return false
	}
	if this.TS != that1.TS {
		return false
	}
	return true
}
func (this *E) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*E)
	if !ok {
		that2, ok := that.(E)
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
	if !this.TemplateID.Equal(that1.TemplateID) {
		return false
	}
	if this.Name != that1.Name {
		return false
	}
	if !this.OwnerID.Equal(that1.OwnerID) {
		return false
	}
	if this.Dead != that1.Dead {
		return false
	}
	if this.HP != that1.HP {
		return false
	}
	if this.MaxHP != that1.MaxHP {
		return false
	}
	if this.MP != that1.MP {
		return false
	}
	if this.MaxMP != that1.MaxMP {
		return false
	}
	if !this.Direction.Equal(&that1.Direction) {
		return false
	}
	if !this.Position.Equal(&that1.Position) {
		return false
	}
	if !this.Cast.Equal(that1.Cast) {
		return false
	}
	if !this.AssetID.Equal(that1.AssetID) {
		return false
	}
	if !this.InventoryID.Equal(that1.InventoryID) {
		return false
	}
	if !this.SpawnID.Equal(that1.SpawnID) {
		return false
	}
	if this.TS != that1.TS {
		return false
	}
	if !this.State.Equal(that1.State) {
		return false
	}
	return true
}
func (this *Cast) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&entity.Cast{")
	s = append(s, "AbilityID: "+fmt.Sprintf("%#v", this.AbilityID)+",\n")
	s = append(s, "TS: "+fmt.Sprintf("%#v", this.TS)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *E) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 21)
	s = append(s, "&entity.E{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "TemplateID: "+fmt.Sprintf("%#v", this.TemplateID)+",\n")
	s = append(s, "Name: "+fmt.Sprintf("%#v", this.Name)+",\n")
	s = append(s, "OwnerID: "+fmt.Sprintf("%#v", this.OwnerID)+",\n")
	s = append(s, "Dead: "+fmt.Sprintf("%#v", this.Dead)+",\n")
	s = append(s, "HP: "+fmt.Sprintf("%#v", this.HP)+",\n")
	s = append(s, "MaxHP: "+fmt.Sprintf("%#v", this.MaxHP)+",\n")
	s = append(s, "MP: "+fmt.Sprintf("%#v", this.MP)+",\n")
	s = append(s, "MaxMP: "+fmt.Sprintf("%#v", this.MaxMP)+",\n")
	s = append(s, "Direction: "+strings.Replace(this.Direction.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "Position: "+strings.Replace(this.Position.GoString(), `&`, ``, 1)+",\n")
	if this.Cast != nil {
		s = append(s, "Cast: "+fmt.Sprintf("%#v", this.Cast)+",\n")
	}
	s = append(s, "AssetID: "+fmt.Sprintf("%#v", this.AssetID)+",\n")
	s = append(s, "InventoryID: "+fmt.Sprintf("%#v", this.InventoryID)+",\n")
	s = append(s, "SpawnID: "+fmt.Sprintf("%#v", this.SpawnID)+",\n")
	s = append(s, "TS: "+fmt.Sprintf("%#v", this.TS)+",\n")
	s = append(s, "State: "+fmt.Sprintf("%#v", this.State)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringEntity(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Cast) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Cast) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Cast) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.TS != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.TS))
		i--
		dAtA[i] = 0x10
	}
	{
		size := m.AbilityID.Size()
		i -= size
		if _, err := m.AbilityID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *E) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *E) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *E) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.State.Size()
		i -= size
		if _, err := m.State.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1
	i--
	dAtA[i] = 0x8a
	if m.TS != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.TS))
		i--
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x80
	}
	{
		size := m.SpawnID.Size()
		i -= size
		if _, err := m.SpawnID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x7a
	{
		size := m.InventoryID.Size()
		i -= size
		if _, err := m.InventoryID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x72
	{
		size := m.AssetID.Size()
		i -= size
		if _, err := m.AssetID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x6a
	if m.Cast != nil {
		{
			size, err := m.Cast.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintEntity(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x62
	}
	{
		size, err := m.Position.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x5a
	{
		size, err := m.Direction.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x52
	if m.MaxMP != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.MaxMP))
		i--
		dAtA[i] = 0x48
	}
	if m.MP != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.MP))
		i--
		dAtA[i] = 0x40
	}
	if m.MaxHP != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.MaxHP))
		i--
		dAtA[i] = 0x38
	}
	if m.HP != 0 {
		i = encodeVarintEntity(dAtA, i, uint64(m.HP))
		i--
		dAtA[i] = 0x30
	}
	if m.Dead {
		i--
		if m.Dead {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x28
	}
	{
		size := m.OwnerID.Size()
		i -= size
		if _, err := m.OwnerID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintEntity(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x1a
	}
	{
		size := m.TemplateID.Size()
		i -= size
		if _, err := m.TemplateID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintEntity(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintEntity(dAtA []byte, offset int, v uint64) int {
	offset -= sovEntity(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedCast(r randyEntity, easy bool) *Cast {
	this := &Cast{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.AbilityID = *v1
	this.TS = uint64(uint64(r.Uint32()))
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

func NewPopulatedE(r randyEntity, easy bool) *E {
	this := &E{}
	v2 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v2
	v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.TemplateID = *v3
	this.Name = string(randStringEntity(r))
	v4 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.OwnerID = *v4
	this.Dead = bool(bool(r.Intn(2) == 0))
	this.HP = uint64(uint64(r.Uint32()))
	this.MaxHP = uint64(uint64(r.Uint32()))
	this.MP = uint64(uint64(r.Uint32()))
	this.MaxMP = uint64(uint64(r.Uint32()))
	v5 := geometry.NewPopulatedVec3(r, easy)
	this.Direction = *v5
	v6 := geometry.NewPopulatedVec3(r, easy)
	this.Position = *v6
	if r.Intn(5) != 0 {
		this.Cast = NewPopulatedCast(r, easy)
	}
	v7 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.AssetID = *v7
	v8 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.InventoryID = *v8
	v9 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.SpawnID = *v9
	this.TS = uint64(uint64(r.Uint32()))
	v10 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.State = *v10
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyEntity interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneEntity(r randyEntity) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringEntity(r randyEntity) string {
	v11 := r.Intn(100)
	tmps := make([]rune, v11)
	for i := 0; i < v11; i++ {
		tmps[i] = randUTF8RuneEntity(r)
	}
	return string(tmps)
}
func randUnrecognizedEntity(r randyEntity, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldEntity(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldEntity(dAtA []byte, r randyEntity, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(key))
		v12 := r.Int63()
		if r.Intn(2) == 0 {
			v12 *= -1
		}
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(v12))
	case 1:
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateEntity(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateEntity(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *Cast) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.AbilityID.Size()
	n += 1 + l + sovEntity(uint64(l))
	if m.TS != 0 {
		n += 1 + sovEntity(uint64(m.TS))
	}
	return n
}

func (m *E) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovEntity(uint64(l))
	l = m.TemplateID.Size()
	n += 1 + l + sovEntity(uint64(l))
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovEntity(uint64(l))
	}
	l = m.OwnerID.Size()
	n += 1 + l + sovEntity(uint64(l))
	if m.Dead {
		n += 2
	}
	if m.HP != 0 {
		n += 1 + sovEntity(uint64(m.HP))
	}
	if m.MaxHP != 0 {
		n += 1 + sovEntity(uint64(m.MaxHP))
	}
	if m.MP != 0 {
		n += 1 + sovEntity(uint64(m.MP))
	}
	if m.MaxMP != 0 {
		n += 1 + sovEntity(uint64(m.MaxMP))
	}
	l = m.Direction.Size()
	n += 1 + l + sovEntity(uint64(l))
	l = m.Position.Size()
	n += 1 + l + sovEntity(uint64(l))
	if m.Cast != nil {
		l = m.Cast.Size()
		n += 1 + l + sovEntity(uint64(l))
	}
	l = m.AssetID.Size()
	n += 1 + l + sovEntity(uint64(l))
	l = m.InventoryID.Size()
	n += 1 + l + sovEntity(uint64(l))
	l = m.SpawnID.Size()
	n += 1 + l + sovEntity(uint64(l))
	if m.TS != 0 {
		n += 2 + sovEntity(uint64(m.TS))
	}
	l = m.State.Size()
	n += 2 + l + sovEntity(uint64(l))
	return n
}

func sovEntity(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEntity(x uint64) (n int) {
	return sovEntity(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Cast) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Cast{`,
		`AbilityID:` + fmt.Sprintf("%v", this.AbilityID) + `,`,
		`TS:` + fmt.Sprintf("%v", this.TS) + `,`,
		`}`,
	}, "")
	return s
}
func (this *E) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&E{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`TemplateID:` + fmt.Sprintf("%v", this.TemplateID) + `,`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`OwnerID:` + fmt.Sprintf("%v", this.OwnerID) + `,`,
		`Dead:` + fmt.Sprintf("%v", this.Dead) + `,`,
		`HP:` + fmt.Sprintf("%v", this.HP) + `,`,
		`MaxHP:` + fmt.Sprintf("%v", this.MaxHP) + `,`,
		`MP:` + fmt.Sprintf("%v", this.MP) + `,`,
		`MaxMP:` + fmt.Sprintf("%v", this.MaxMP) + `,`,
		`Direction:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Direction), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`Position:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Position), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`Cast:` + strings.Replace(this.Cast.String(), "Cast", "Cast", 1) + `,`,
		`AssetID:` + fmt.Sprintf("%v", this.AssetID) + `,`,
		`InventoryID:` + fmt.Sprintf("%v", this.InventoryID) + `,`,
		`SpawnID:` + fmt.Sprintf("%v", this.SpawnID) + `,`,
		`TS:` + fmt.Sprintf("%v", this.TS) + `,`,
		`State:` + fmt.Sprintf("%v", this.State) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringEntity(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Cast) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEntity
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
			return fmt.Errorf("proto: Cast: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Cast: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AbilityID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.AbilityID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TS", wireType)
			}
			m.TS = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TS |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipEntity(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthEntity
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthEntity
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
func (m *E) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEntity
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
			return fmt.Errorf("proto: E: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: E: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
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
				return fmt.Errorf("proto: wrong wireType = %d for field TemplateID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.TemplateID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OwnerID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.OwnerID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dead", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Dead = bool(v != 0)
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field HP", wireType)
			}
			m.HP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.HP |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxHP", wireType)
			}
			m.MaxHP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxHP |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MP", wireType)
			}
			m.MP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MP |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxMP", wireType)
			}
			m.MaxMP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxMP |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Direction", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Direction.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Position", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Position.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cast", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Cast == nil {
				m.Cast = &Cast{}
			}
			if err := m.Cast.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AssetID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.AssetID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InventoryID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.InventoryID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 15:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpawnID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.SpawnID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 16:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TS", wireType)
			}
			m.TS = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TS |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 17:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEntity
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
				return ErrInvalidLengthEntity
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthEntity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.State.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEntity(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthEntity
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthEntity
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
func skipEntity(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEntity
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
					return 0, ErrIntOverflowEntity
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
					return 0, ErrIntOverflowEntity
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
				return 0, ErrInvalidLengthEntity
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEntity
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEntity
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEntity        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEntity          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEntity = fmt.Errorf("proto: unexpected end of group")
)
