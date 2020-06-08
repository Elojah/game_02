// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: coordinate.proto

package space

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/gogo/protobuf/gogoproto"

import github_com_elojah_game_02_pkg_ulid "github.com/elojah/game_02/pkg/ulid"

import strings "strings"
import reflect "reflect"

import io "io"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

type Coordinate struct {
	// Technical requirment for redis space indexing.
	X                    uint64                                 `protobuf:"varint,1,opt,name=X,json=x,proto3" json:"X,omitempty"`
	Y                    uint64                                 `protobuf:"varint,2,opt,name=Y,json=y,proto3" json:"Y,omitempty"`
	EntityID             *github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,3,opt,name=EntityID,json=entityID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"EntityID,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                               `json:"-"`
	XXX_sizecache        int32                                  `json:"-"`
}

func (m *Coordinate) Reset()      { *m = Coordinate{} }
func (*Coordinate) ProtoMessage() {}
func (*Coordinate) Descriptor() ([]byte, []int) {
	return fileDescriptor_coordinate_d3559d63b4444365, []int{0}
}
func (m *Coordinate) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Coordinate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Coordinate.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Coordinate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Coordinate.Merge(dst, src)
}
func (m *Coordinate) XXX_Size() int {
	return m.Size()
}
func (m *Coordinate) XXX_DiscardUnknown() {
	xxx_messageInfo_Coordinate.DiscardUnknown(m)
}

var xxx_messageInfo_Coordinate proto.InternalMessageInfo

func (m *Coordinate) GetX() uint64 {
	if m != nil {
		return m.X
	}
	return 0
}

func (m *Coordinate) GetY() uint64 {
	if m != nil {
		return m.Y
	}
	return 0
}

func init() {
	proto.RegisterType((*Coordinate)(nil), "space.Coordinate")
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
	if this.X != that1.X {
		return false
	}
	if this.Y != that1.Y {
		return false
	}
	if that1.EntityID == nil {
		if this.EntityID != nil {
			return false
		}
	} else if !this.EntityID.Equal(*that1.EntityID) {
		return false
	}
	return true
}
func (this *Coordinate) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 7)
	s = append(s, "&space.Coordinate{")
	s = append(s, "X: "+fmt.Sprintf("%#v", this.X)+",\n")
	s = append(s, "Y: "+fmt.Sprintf("%#v", this.Y)+",\n")
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
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Coordinate) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.X != 0 {
		dAtA[i] = 0x8
		i++
		i = encodeVarintCoordinate(dAtA, i, uint64(m.X))
	}
	if m.Y != 0 {
		dAtA[i] = 0x10
		i++
		i = encodeVarintCoordinate(dAtA, i, uint64(m.Y))
	}
	if m.EntityID != nil {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintCoordinate(dAtA, i, uint64(m.EntityID.Size()))
		n1, err := m.EntityID.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n1
	}
	return i, nil
}

func encodeVarintCoordinate(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func NewPopulatedCoordinate(r randyCoordinate, easy bool) *Coordinate {
	this := &Coordinate{}
	this.X = uint64(uint64(r.Uint32()))
	this.Y = uint64(uint64(r.Uint32()))
	this.EntityID = github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
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
	v1 := r.Intn(100)
	tmps := make([]rune, v1)
	for i := 0; i < v1; i++ {
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
		v2 := r.Int63()
		if r.Intn(2) == 0 {
			v2 *= -1
		}
		dAtA = encodeVarintPopulateCoordinate(dAtA, uint64(v2))
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
	var l int
	_ = l
	if m.X != 0 {
		n += 1 + sovCoordinate(uint64(m.X))
	}
	if m.Y != 0 {
		n += 1 + sovCoordinate(uint64(m.Y))
	}
	if m.EntityID != nil {
		l = m.EntityID.Size()
		n += 1 + l + sovCoordinate(uint64(l))
	}
	return n
}

func sovCoordinate(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozCoordinate(x uint64) (n int) {
	return sovCoordinate(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Coordinate) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Coordinate{`,
		`X:` + fmt.Sprintf("%v", this.X) + `,`,
		`Y:` + fmt.Sprintf("%v", this.Y) + `,`,
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
			wire |= (uint64(b) & 0x7F) << shift
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field X", wireType)
			}
			m.X = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.X |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Y", wireType)
			}
			m.Y = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCoordinate
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Y |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
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
				byteLen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthCoordinate
			}
			postIndex := iNdEx + byteLen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			var v github_com_elojah_game_02_pkg_ulid.ID
			m.EntityID = &v
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
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
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
			iNdEx += length
			if length < 0 {
				return 0, ErrInvalidLengthCoordinate
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowCoordinate
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipCoordinate(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthCoordinate = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCoordinate   = fmt.Errorf("proto: integer overflow")
)

func init() { proto.RegisterFile("coordinate.proto", fileDescriptor_coordinate_d3559d63b4444365) }

var fileDescriptor_coordinate_d3559d63b4444365 = []byte{
	// 236 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x48, 0xce, 0xcf, 0x2f,
	0x4a, 0xc9, 0xcc, 0x4b, 0x2c, 0x49, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x2d, 0x2e,
	0x48, 0x4c, 0x4e, 0x95, 0xd2, 0x4d, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5,
	0x4f, 0xcf, 0x4f, 0xcf, 0xd7, 0x07, 0xcb, 0x26, 0x95, 0xa6, 0x81, 0x79, 0x60, 0x0e, 0x98, 0x05,
	0xd1, 0xa5, 0x54, 0xcc, 0xc5, 0xe5, 0x0c, 0x37, 0x49, 0x88, 0x87, 0x8b, 0x31, 0x42, 0x82, 0x51,
	0x81, 0x51, 0x83, 0x25, 0x88, 0xb1, 0x02, 0xc4, 0x8b, 0x94, 0x60, 0x82, 0xf0, 0x2a, 0x85, 0x3c,
	0xb9, 0x38, 0x5c, 0xf3, 0x4a, 0x32, 0x4b, 0x2a, 0x3d, 0x5d, 0x24, 0x98, 0x15, 0x18, 0x35, 0x78,
	0x9c, 0x74, 0x4f, 0xdc, 0x93, 0x67, 0xbc, 0x75, 0x4f, 0x5e, 0x15, 0xc9, 0xca, 0xd4, 0x9c, 0xfc,
	0xac, 0xc4, 0x0c, 0xfd, 0xf4, 0xc4, 0xdc, 0xd4, 0x78, 0x03, 0x23, 0xfd, 0x82, 0xec, 0x74, 0xfd,
	0xd2, 0x9c, 0xcc, 0x14, 0x3d, 0x4f, 0x97, 0x20, 0x8e, 0x54, 0xa8, 0x76, 0x27, 0x8b, 0x0b, 0x0f,
	0xe5, 0x18, 0x6e, 0x3c, 0x94, 0x63, 0xf8, 0xf0, 0x50, 0x8e, 0xf1, 0xc7, 0x43, 0x39, 0xc6, 0x86,
	0x47, 0x72, 0x8c, 0x2b, 0x1e, 0xc9, 0x31, 0xee, 0x78, 0x24, 0xc7, 0x78, 0xe0, 0x91, 0x1c, 0xe3,
	0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0xf8, 0xe2, 0x91, 0x1c,
	0xc3, 0x87, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x24, 0xb1, 0x81, 0x5d, 0x6d, 0x0c, 0x08,
	0x00, 0x00, 0xff, 0xff, 0x88, 0x1b, 0xb9, 0xc3, 0xff, 0x00, 0x00, 0x00,
}
