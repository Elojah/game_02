// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: room.proto

package room

import (
	bytes "bytes"
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

type R struct {
	ID       github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	Name     string                                `protobuf:"bytes,2,opt,name=Name,proto3" json:"Name,omitempty"`
	Password []byte                                `protobuf:"bytes,3,opt,name=Password,proto3" json:"Password,omitempty"`
	Owner    github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,4,opt,name=Owner,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"Owner"`
}

func (m *R) Reset()      { *m = R{} }
func (*R) ProtoMessage() {}
func (*R) Descriptor() ([]byte, []int) {
	return fileDescriptor_c5fd27dd97284ef4, []int{0}
}
func (m *R) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *R) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_R.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *R) XXX_Merge(src proto.Message) {
	xxx_messageInfo_R.Merge(m, src)
}
func (m *R) XXX_Size() int {
	return m.Size()
}
func (m *R) XXX_DiscardUnknown() {
	xxx_messageInfo_R.DiscardUnknown(m)
}

var xxx_messageInfo_R proto.InternalMessageInfo

func (m *R) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *R) GetPassword() []byte {
	if m != nil {
		return m.Password
	}
	return nil
}

func init() {
	proto.RegisterType((*R)(nil), "room.R")
}

func init() { proto.RegisterFile("room.proto", fileDescriptor_c5fd27dd97284ef4) }

var fileDescriptor_c5fd27dd97284ef4 = []byte{
	// 263 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2a, 0xca, 0xcf, 0xcf,
	0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x01, 0xb1, 0xa5, 0x74, 0xd3, 0x33, 0x4b, 0x32,
	0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0xd3, 0xf3, 0xd3, 0xf3, 0xf5, 0xc1, 0x92, 0x49, 0xa5,
	0x69, 0x60, 0x1e, 0x98, 0x03, 0x66, 0x41, 0x34, 0x29, 0xed, 0x65, 0xe4, 0x62, 0x0c, 0x12, 0xb2,
	0xe5, 0x62, 0xf2, 0x74, 0x91, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x71, 0xd2, 0x3d, 0x71, 0x4f, 0x9e,
	0xe1, 0xd6, 0x3d, 0x79, 0x55, 0x24, 0x83, 0x52, 0x73, 0xf2, 0xb3, 0x12, 0x33, 0xf4, 0xd3, 0x13,
	0x73, 0x53, 0xe3, 0x0d, 0x8c, 0xf4, 0x0b, 0xb2, 0xd3, 0xf5, 0x4b, 0x73, 0x32, 0x53, 0xf4, 0x3c,
	0x5d, 0x82, 0x98, 0x3c, 0x5d, 0x84, 0x84, 0xb8, 0x58, 0xfc, 0x12, 0x73, 0x53, 0x25, 0x98, 0x14,
	0x18, 0x35, 0x38, 0x83, 0xc0, 0x6c, 0x21, 0x05, 0x2e, 0x8e, 0x80, 0xc4, 0xe2, 0xe2, 0xf2, 0xfc,
	0xa2, 0x14, 0x09, 0x66, 0xb0, 0xc1, 0x2c, 0x27, 0xee, 0xc9, 0x33, 0x06, 0xc1, 0x45, 0x85, 0x9c,
	0xb9, 0x58, 0xfd, 0xcb, 0xf3, 0x52, 0x8b, 0x24, 0x58, 0xc8, 0xb1, 0x17, 0xa2, 0xd7, 0xc9, 0xe1,
	0xc2, 0x43, 0x39, 0x86, 0x1b, 0x0f, 0xe5, 0x18, 0x3e, 0x3c, 0x94, 0x63, 0xfc, 0xf1, 0x50, 0x8e,
	0xb1, 0xe1, 0x91, 0x1c, 0xe3, 0x8a, 0x47, 0x72, 0x8c, 0x3b, 0x1e, 0xc9, 0x31, 0x1e, 0x78, 0x24,
	0xc7, 0x78, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0xbe, 0x78,
	0x24, 0xc7, 0xf0, 0xe1, 0x91, 0x1c, 0xe3, 0x84, 0xc7, 0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc,
	0x78, 0x2c, 0xc7, 0x90, 0xc4, 0x06, 0x0e, 0x08, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x6b,
	0x68, 0xdf, 0x8c, 0x4b, 0x01, 0x00, 0x00,
}

func (this *R) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*R)
	if !ok {
		that2, ok := that.(R)
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
	if !bytes.Equal(this.Password, that1.Password) {
		return false
	}
	if !this.Owner.Equal(that1.Owner) {
		return false
	}
	return true
}
func (this *R) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 8)
	s = append(s, "&room.R{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Name: "+fmt.Sprintf("%#v", this.Name)+",\n")
	s = append(s, "Password: "+fmt.Sprintf("%#v", this.Password)+",\n")
	s = append(s, "Owner: "+fmt.Sprintf("%#v", this.Owner)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringRoom(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *R) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *R) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *R) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.Owner.Size()
		i -= size
		if _, err := m.Owner.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintRoom(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if len(m.Password) > 0 {
		i -= len(m.Password)
		copy(dAtA[i:], m.Password)
		i = encodeVarintRoom(dAtA, i, uint64(len(m.Password)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintRoom(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x12
	}
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintRoom(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintRoom(dAtA []byte, offset int, v uint64) int {
	offset -= sovRoom(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedR(r randyRoom, easy bool) *R {
	this := &R{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v1
	this.Name = string(randStringRoom(r))
	v2 := r.Intn(100)
	this.Password = make([]byte, v2)
	for i := 0; i < v2; i++ {
		this.Password[i] = byte(r.Intn(256))
	}
	v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.Owner = *v3
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyRoom interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneRoom(r randyRoom) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringRoom(r randyRoom) string {
	v4 := r.Intn(100)
	tmps := make([]rune, v4)
	for i := 0; i < v4; i++ {
		tmps[i] = randUTF8RuneRoom(r)
	}
	return string(tmps)
}
func randUnrecognizedRoom(r randyRoom, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldRoom(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldRoom(dAtA []byte, r randyRoom, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(key))
		v5 := r.Int63()
		if r.Intn(2) == 0 {
			v5 *= -1
		}
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(v5))
	case 1:
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateRoom(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateRoom(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *R) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovRoom(uint64(l))
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovRoom(uint64(l))
	}
	l = len(m.Password)
	if l > 0 {
		n += 1 + l + sovRoom(uint64(l))
	}
	l = m.Owner.Size()
	n += 1 + l + sovRoom(uint64(l))
	return n
}

func sovRoom(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozRoom(x uint64) (n int) {
	return sovRoom(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *R) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&R{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`Password:` + fmt.Sprintf("%v", this.Password) + `,`,
		`Owner:` + fmt.Sprintf("%v", this.Owner) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringRoom(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *R) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRoom
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
			return fmt.Errorf("proto: R: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: R: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRoom
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
				return ErrInvalidLengthRoom
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthRoom
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
					return ErrIntOverflowRoom
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
				return ErrInvalidLengthRoom
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRoom
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Password", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRoom
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
				return ErrInvalidLengthRoom
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthRoom
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Password = append(m.Password[:0], dAtA[iNdEx:postIndex]...)
			if m.Password == nil {
				m.Password = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRoom
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
				return ErrInvalidLengthRoom
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthRoom
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Owner.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipRoom(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthRoom
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthRoom
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
func skipRoom(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowRoom
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
					return 0, ErrIntOverflowRoom
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
					return 0, ErrIntOverflowRoom
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
				return 0, ErrInvalidLengthRoom
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupRoom
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthRoom
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthRoom        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowRoom          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupRoom = fmt.Errorf("proto: unexpected end of group")
)
