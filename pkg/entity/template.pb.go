// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/entity/template.proto

package entity

import (
	fmt "fmt"
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

type Template struct {
	// #Identifiers
	ID   github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	Name string                                `protobuf:"bytes,2,opt,name=Name,proto3" json:"Name,omitempty"`
	// #Stats
	MaxHP uint64 `protobuf:"varint,3,opt,name=MaxHP,proto3" json:"MaxHP,omitempty"`
	MaxMP uint64 `protobuf:"varint,4,opt,name=MaxMP,proto3" json:"MaxMP,omitempty"`
	// #Spatial & graphic parameters
	AssetID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,5,opt,name=AssetID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"AssetID"`
	// #In game external ids
	SpawnID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,6,opt,name=SpawnID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"SpawnID"`
}

func (m *Template) Reset()      { *m = Template{} }
func (*Template) ProtoMessage() {}
func (*Template) Descriptor() ([]byte, []int) {
	return fileDescriptor_d1506b3d5552aaf5, []int{0}
}
func (m *Template) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Template) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Template.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Template) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Template.Merge(m, src)
}
func (m *Template) XXX_Size() int {
	return m.Size()
}
func (m *Template) XXX_DiscardUnknown() {
	xxx_messageInfo_Template.DiscardUnknown(m)
}

var xxx_messageInfo_Template proto.InternalMessageInfo

func (m *Template) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Template) GetMaxHP() uint64 {
	if m != nil {
		return m.MaxHP
	}
	return 0
}

func (m *Template) GetMaxMP() uint64 {
	if m != nil {
		return m.MaxMP
	}
	return 0
}

func init() {
	proto.RegisterType((*Template)(nil), "entity.Template")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/entity/template.proto", fileDescriptor_d1506b3d5552aaf5)
}

var fileDescriptor_d1506b3d5552aaf5 = []byte{
	// 299 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x32, 0x4e, 0xcf, 0x2c, 0xc9,
	0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcd, 0xc9, 0xcf, 0x4a, 0xcc, 0xd0, 0x4f, 0x4f,
	0xcc, 0x4d, 0x8d, 0x37, 0x30, 0xd2, 0x2f, 0xc8, 0x4e, 0xd7, 0x4f, 0xcd, 0x2b, 0xc9, 0x2c, 0xa9,
	0xd4, 0x2f, 0x49, 0xcd, 0x2d, 0xc8, 0x49, 0x2c, 0x49, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0x62, 0x83, 0x08, 0x4b, 0xe9, 0x22, 0x69, 0x4e, 0xcf, 0x4f, 0xcf, 0xd7, 0x07, 0x4b, 0x27, 0x95,
	0xa6, 0x81, 0x79, 0x60, 0x0e, 0x98, 0x05, 0xd1, 0xa6, 0x34, 0x9b, 0x89, 0x8b, 0x23, 0x04, 0x6a,
	0x92, 0x90, 0x2d, 0x17, 0x93, 0xa7, 0x8b, 0x04, 0xa3, 0x02, 0xa3, 0x06, 0x8f, 0x93, 0xee, 0x89,
	0x7b, 0xf2, 0x0c, 0xb7, 0xee, 0xc9, 0xab, 0xe2, 0x77, 0x4c, 0x69, 0x4e, 0x66, 0x8a, 0x9e, 0xa7,
	0x4b, 0x10, 0x93, 0xa7, 0x8b, 0x90, 0x10, 0x17, 0x8b, 0x5f, 0x62, 0x6e, 0xaa, 0x04, 0x93, 0x02,
	0xa3, 0x06, 0x67, 0x10, 0x98, 0x2d, 0x24, 0xc2, 0xc5, 0xea, 0x9b, 0x58, 0xe1, 0x11, 0x20, 0xc1,
	0xac, 0xc0, 0xa8, 0xc1, 0x12, 0x04, 0xe1, 0x40, 0x45, 0x7d, 0x03, 0x24, 0x58, 0xe0, 0xa2, 0xbe,
	0x01, 0x42, 0xee, 0x5c, 0xec, 0x8e, 0xc5, 0xc5, 0xa9, 0x25, 0x9e, 0x2e, 0x12, 0xac, 0xe4, 0xb8,
	0x01, 0xa6, 0x1b, 0x64, 0x50, 0x70, 0x41, 0x62, 0x79, 0x9e, 0xa7, 0x8b, 0x04, 0x1b, 0x59, 0x06,
	0x41, 0x75, 0x3b, 0x39, 0x5c, 0x78, 0x28, 0xc7, 0x70, 0xe3, 0xa1, 0x1c, 0xc3, 0x87, 0x87, 0x72,
	0x8c, 0x3f, 0x1e, 0xca, 0x31, 0x36, 0x3c, 0x92, 0x63, 0x5c, 0xf1, 0x48, 0x8e, 0x71, 0xc7, 0x23,
	0x39, 0xc6, 0x03, 0x8f, 0xe4, 0x18, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1,
	0x23, 0x39, 0xc6, 0x17, 0x8f, 0xe4, 0x18, 0x3e, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1,
	0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0x92, 0xd8, 0xc0, 0xc1, 0x6c, 0x0c, 0x08, 0x00,
	0x00, 0xff, 0xff, 0xea, 0x2b, 0xd1, 0x48, 0xd4, 0x01, 0x00, 0x00,
}

func (this *Template) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Template)
	if !ok {
		that2, ok := that.(Template)
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
	if this.MaxHP != that1.MaxHP {
		return false
	}
	if this.MaxMP != that1.MaxMP {
		return false
	}
	if !this.AssetID.Equal(that1.AssetID) {
		return false
	}
	if !this.SpawnID.Equal(that1.SpawnID) {
		return false
	}
	return true
}
func (this *Template) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 10)
	s = append(s, "&entity.Template{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Name: "+fmt.Sprintf("%#v", this.Name)+",\n")
	s = append(s, "MaxHP: "+fmt.Sprintf("%#v", this.MaxHP)+",\n")
	s = append(s, "MaxMP: "+fmt.Sprintf("%#v", this.MaxMP)+",\n")
	s = append(s, "AssetID: "+fmt.Sprintf("%#v", this.AssetID)+",\n")
	s = append(s, "SpawnID: "+fmt.Sprintf("%#v", this.SpawnID)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringTemplate(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Template) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Template) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Template) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.SpawnID.Size()
		i -= size
		if _, err := m.SpawnID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintTemplate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	{
		size := m.AssetID.Size()
		i -= size
		if _, err := m.AssetID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintTemplate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.MaxMP != 0 {
		i = encodeVarintTemplate(dAtA, i, uint64(m.MaxMP))
		i--
		dAtA[i] = 0x20
	}
	if m.MaxHP != 0 {
		i = encodeVarintTemplate(dAtA, i, uint64(m.MaxHP))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintTemplate(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x12
	}
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintTemplate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintTemplate(dAtA []byte, offset int, v uint64) int {
	offset -= sovTemplate(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedTemplate(r randyTemplate, easy bool) *Template {
	this := &Template{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v1
	this.Name = string(randStringTemplate(r))
	this.MaxHP = uint64(uint64(r.Uint32()))
	this.MaxMP = uint64(uint64(r.Uint32()))
	v2 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.AssetID = *v2
	v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.SpawnID = *v3
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyTemplate interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneTemplate(r randyTemplate) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringTemplate(r randyTemplate) string {
	v4 := r.Intn(100)
	tmps := make([]rune, v4)
	for i := 0; i < v4; i++ {
		tmps[i] = randUTF8RuneTemplate(r)
	}
	return string(tmps)
}
func randUnrecognizedTemplate(r randyTemplate, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldTemplate(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldTemplate(dAtA []byte, r randyTemplate, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(key))
		v5 := r.Int63()
		if r.Intn(2) == 0 {
			v5 *= -1
		}
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(v5))
	case 1:
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateTemplate(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateTemplate(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *Template) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovTemplate(uint64(l))
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovTemplate(uint64(l))
	}
	if m.MaxHP != 0 {
		n += 1 + sovTemplate(uint64(m.MaxHP))
	}
	if m.MaxMP != 0 {
		n += 1 + sovTemplate(uint64(m.MaxMP))
	}
	l = m.AssetID.Size()
	n += 1 + l + sovTemplate(uint64(l))
	l = m.SpawnID.Size()
	n += 1 + l + sovTemplate(uint64(l))
	return n
}

func sovTemplate(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTemplate(x uint64) (n int) {
	return sovTemplate(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Template) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Template{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`MaxHP:` + fmt.Sprintf("%v", this.MaxHP) + `,`,
		`MaxMP:` + fmt.Sprintf("%v", this.MaxMP) + `,`,
		`AssetID:` + fmt.Sprintf("%v", this.AssetID) + `,`,
		`SpawnID:` + fmt.Sprintf("%v", this.SpawnID) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringTemplate(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Template) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTemplate
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
			return fmt.Errorf("proto: Template: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Template: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTemplate
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
				return ErrInvalidLengthTemplate
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTemplate
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
					return ErrIntOverflowTemplate
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
				return ErrInvalidLengthTemplate
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTemplate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxHP", wireType)
			}
			m.MaxHP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTemplate
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
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxMP", wireType)
			}
			m.MaxMP = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTemplate
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
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AssetID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTemplate
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
				return ErrInvalidLengthTemplate
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTemplate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.AssetID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpawnID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTemplate
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
				return ErrInvalidLengthTemplate
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTemplate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.SpawnID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTemplate(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTemplate
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthTemplate
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
func skipTemplate(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTemplate
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
					return 0, ErrIntOverflowTemplate
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
					return 0, ErrIntOverflowTemplate
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
				return 0, ErrInvalidLengthTemplate
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTemplate
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTemplate
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTemplate        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTemplate          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTemplate = fmt.Errorf("proto: unexpected end of group")
)
