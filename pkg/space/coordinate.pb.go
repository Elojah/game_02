// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/space/coordinate.proto

package space

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

type Coordinate struct {
	Position  geometry.Vec3                         `protobuf:"bytes,1,opt,name=Position,proto3" json:"Position"`
	Direction geometry.Vec3                         `protobuf:"bytes,2,opt,name=Direction,proto3" json:"Direction"`
	TS        uint64                                `protobuf:"varint,3,opt,name=TS,proto3" json:"TS,omitempty"`
	EntityID  github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,4,opt,name=EntityID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"EntityID"`
}

func (m *Coordinate) Reset()      { *m = Coordinate{} }
func (*Coordinate) ProtoMessage() {}
func (*Coordinate) Descriptor() ([]byte, []int) {
	return fileDescriptor_47fd6484fa2474f5, []int{0}
}
func (m *Coordinate) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Coordinate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Coordinate.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Coordinate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Coordinate.Merge(m, src)
}
func (m *Coordinate) XXX_Size() int {
	return m.Size()
}
func (m *Coordinate) XXX_DiscardUnknown() {
	xxx_messageInfo_Coordinate.DiscardUnknown(m)
}

var xxx_messageInfo_Coordinate proto.InternalMessageInfo

func (m *Coordinate) GetPosition() geometry.Vec3 {
	if m != nil {
		return m.Position
	}
	return geometry.Vec3{}
}

func (m *Coordinate) GetDirection() geometry.Vec3 {
	if m != nil {
		return m.Direction
	}
	return geometry.Vec3{}
}

func (m *Coordinate) GetTS() uint64 {
	if m != nil {
		return m.TS
	}
	return 0
}

func init() {
	proto.RegisterType((*Coordinate)(nil), "space.Coordinate")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/space/coordinate.proto", fileDescriptor_47fd6484fa2474f5)
}

var fileDescriptor_47fd6484fa2474f5 = []byte{
	// 310 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x32, 0x49, 0xcf, 0x2c, 0xc9,
	0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcd, 0xc9, 0xcf, 0x4a, 0xcc, 0xd0, 0x4f, 0x4f,
	0xcc, 0x4d, 0x8d, 0x37, 0x30, 0xd2, 0x2f, 0xc8, 0x4e, 0xd7, 0x2f, 0x2e, 0x48, 0x4c, 0x4e, 0xd5,
	0x4f, 0xce, 0xcf, 0x2f, 0x4a, 0xc9, 0xcc, 0x4b, 0x2c, 0x49, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x62, 0x05, 0x8b, 0x4b, 0xe9, 0x22, 0x69, 0x4e, 0xcf, 0x4f, 0xcf, 0xd7, 0x07, 0xcb, 0x26,
	0x95, 0xa6, 0x81, 0x79, 0x60, 0x0e, 0x98, 0x05, 0xd1, 0x25, 0x65, 0x8a, 0xdf, 0xae, 0xf4, 0xd4,
	0xfc, 0xdc, 0xd4, 0x92, 0xa2, 0x4a, 0x38, 0x03, 0xa2, 0x4d, 0xe9, 0x2c, 0x23, 0x17, 0x97, 0x33,
	0xdc, 0x05, 0x42, 0x06, 0x5c, 0x1c, 0x01, 0xf9, 0xc5, 0x99, 0x25, 0x99, 0xf9, 0x79, 0x12, 0x8c,
	0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0x7c, 0x7a, 0x70, 0x1d, 0x61, 0xa9, 0xc9, 0xc6, 0x4e, 0x2c, 0x27,
	0xee, 0xc9, 0x33, 0x04, 0xc1, 0x55, 0x09, 0x19, 0x71, 0x71, 0xba, 0x64, 0x16, 0xa5, 0x26, 0x83,
	0xb5, 0x30, 0xe1, 0xd1, 0x82, 0x50, 0x26, 0xc4, 0xc7, 0xc5, 0x14, 0x12, 0x2c, 0xc1, 0xac, 0xc0,
	0xa8, 0xc1, 0x12, 0xc4, 0x14, 0x12, 0x2c, 0xe4, 0xc9, 0xc5, 0xe1, 0x9a, 0x57, 0x92, 0x59, 0x52,
	0xe9, 0xe9, 0x22, 0xc1, 0xa2, 0xc0, 0xa8, 0xc1, 0xe3, 0xa4, 0x0b, 0xd2, 0x72, 0xeb, 0x9e, 0xbc,
	0x2a, 0x7e, 0x5f, 0x95, 0xe6, 0x64, 0xa6, 0xe8, 0x79, 0xba, 0x04, 0xc1, 0xb5, 0x3b, 0x39, 0x5c,
	0x78, 0x28, 0xc7, 0x70, 0xe3, 0xa1, 0x1c, 0xc3, 0x87, 0x87, 0x72, 0x8c, 0x3f, 0x1e, 0xca, 0x31,
	0x36, 0x3c, 0x92, 0x63, 0x5c, 0xf1, 0x48, 0x8e, 0x71, 0xc7, 0x23, 0x39, 0xc6, 0x03, 0x8f, 0xe4,
	0x18, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x17, 0x8f,
	0xe4, 0x18, 0x3e, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b,
	0x8f, 0xe5, 0x18, 0x92, 0xd8, 0xc0, 0x01, 0x63, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x9e, 0xb0,
	0xe5, 0xa5, 0xbd, 0x01, 0x00, 0x00,
}

func (this *Coordinate) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Coordinate)
	if !ok {
		that2, ok := that.(Coordinate)
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
	if !this.Position.Equal(&that1.Position) {
		return false
	}
	if !this.Direction.Equal(&that1.Direction) {
		return false
	}
	if this.TS != that1.TS {
		return false
	}
	if !this.EntityID.Equal(that1.EntityID) {
		return false
	}
	return true
}
func (this *Coordinate) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 8)
	s = append(s, "&space.Coordinate{")
	s = append(s, "Position: "+strings.Replace(this.Position.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "Direction: "+strings.Replace(this.Direction.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "TS: "+fmt.Sprintf("%#v", this.TS)+",\n")
	s = append(s, "EntityID: "+fmt.Sprintf("%#v", this.EntityID)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringCoordinate(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Coordinate) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Coordinate) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Coordinate) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.EntityID.Size()
		i -= size
		if _, err := m.EntityID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintCoordinate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if m.TS != 0 {
		i = encodeVarintCoordinate(dAtA, i, uint64(m.TS))
		i--
		dAtA[i] = 0x18
	}
	{
		size, err := m.Direction.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCoordinate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.Position.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCoordinate(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintCoordinate(dAtA []byte, offset int, v uint64) int {
	offset -= sovCoordinate(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedCoordinate(r randyCoordinate, easy bool) *Coordinate {
	this := &Coordinate{}
	v1 := geometry.NewPopulatedVec3(r, easy)
	this.Position = *v1
	v2 := geometry.NewPopulatedVec3(r, easy)
	this.Direction = *v2
	this.TS = uint64(uint64(r.Uint32()))
	v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.EntityID = *v3
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyCoordinate interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneCoordinate(r randyCoordinate) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringCoordinate(r randyCoordinate) string {
	v4 := r.Intn(100)
	tmps := make([]rune, v4)
	for i := 0; i < v4; i++ {
		tmps[i] = randUTF8RuneCoordinate(r)
	}
	return string(tmps)
}
func randUnrecognizedCoordinate(r randyCoordinate, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldCoordinate(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldCoordinate(dAtA []byte, r randyCoordinate, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(key))
		v5 := r.Int63()
		if r.Intn(2) == 0 {
			v5 *= -1
		}
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(v5))
	case 1:
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateCoordinate(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *Coordinate) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Position.Size()
	n += 1 + l + sovCoordinate(uint64(l))
	l = m.Direction.Size()
	n += 1 + l + sovCoordinate(uint64(l))
	if m.TS != 0 {
		n += 1 + sovCoordinate(uint64(m.TS))
	}
	l = m.EntityID.Size()
	n += 1 + l + sovCoordinate(uint64(l))
	return n
}

func sovCoordinate(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCoordinate(x uint64) (n int) {
	return sovCoordinate(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Coordinate) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Coordinate{`,
		`Position:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Position), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`Direction:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Direction), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`TS:` + fmt.Sprintf("%v", this.TS) + `,`,
		`EntityID:` + fmt.Sprintf("%v", this.EntityID) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringCoordinate(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Coordinate) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCoordinate
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
			return fmt.Errorf("proto: Coordinate: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Coordinate: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Position", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
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
				return ErrInvalidLengthCoordinate
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCoordinate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Position.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Direction", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
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
				return ErrInvalidLengthCoordinate
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCoordinate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Direction.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TS", wireType)
			}
			m.TS = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
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
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EntityID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
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
				return ErrInvalidLengthCoordinate
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthCoordinate
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.EntityID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCoordinate(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthCoordinate
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthCoordinate
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
func skipCoordinate(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCoordinate
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
					return 0, ErrIntOverflowCoordinate
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
					return 0, ErrIntOverflowCoordinate
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
				return 0, ErrInvalidLengthCoordinate
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCoordinate
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCoordinate
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCoordinate        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCoordinate          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCoordinate = fmt.Errorf("proto: unexpected end of group")
)
