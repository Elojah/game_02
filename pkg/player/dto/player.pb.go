// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: player.proto

package dto

import (
	fmt "fmt"
	dto "github.com/elojah/game_02/pkg/account/dto"
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

type Connect struct {
	PlayerID github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=PlayerID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"PlayerID"`
	Auth     dto.Auth                              `protobuf:"bytes,2,opt,name=Auth,proto3" json:"Auth"`
}

func (m *Connect) Reset()      { *m = Connect{} }
func (*Connect) ProtoMessage() {}
func (*Connect) Descriptor() ([]byte, []int) {
	return fileDescriptor_41d803d1b635d5c6, []int{0}
}
func (m *Connect) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Connect) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Connect.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Connect) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Connect.Merge(m, src)
}
func (m *Connect) XXX_Size() int {
	return m.Size()
}
func (m *Connect) XXX_DiscardUnknown() {
	xxx_messageInfo_Connect.DiscardUnknown(m)
}

var xxx_messageInfo_Connect proto.InternalMessageInfo

func (m *Connect) GetAuth() dto.Auth {
	if m != nil {
		return m.Auth
	}
	return dto.Auth{}
}

func init() {
	proto.RegisterType((*Connect)(nil), "dto.Connect")
}

func init() { proto.RegisterFile("player.proto", fileDescriptor_41d803d1b635d5c6) }

var fileDescriptor_41d803d1b635d5c6 = []byte{
	// 265 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x29, 0xc8, 0x49, 0xac,
	0x4c, 0x2d, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x4e, 0x29, 0xc9, 0x97, 0xd2, 0x4d,
	0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcf, 0x4f, 0xcf, 0xd7, 0x07,
	0xcb, 0x25, 0x95, 0xa6, 0x81, 0x79, 0x60, 0x0e, 0x98, 0x05, 0xd1, 0x23, 0x65, 0x8e, 0xa4, 0x3c,
	0x35, 0x27, 0x3f, 0x2b, 0x31, 0x43, 0x3f, 0x3d, 0x31, 0x37, 0x35, 0xde, 0xc0, 0x48, 0xbf, 0x20,
	0x3b, 0x5d, 0x3f, 0x31, 0x39, 0x39, 0xbf, 0x34, 0xaf, 0x44, 0x3f, 0xa5, 0x24, 0x1f, 0xc6, 0x86,
	0x68, 0x54, 0xaa, 0xe4, 0x62, 0x77, 0xce, 0xcf, 0xcb, 0x4b, 0x4d, 0x2e, 0x11, 0xf2, 0xe4, 0xe2,
	0x08, 0x00, 0xbb, 0xc3, 0xd3, 0x45, 0x82, 0x51, 0x81, 0x51, 0x83, 0xc7, 0x49, 0xf7, 0xc4, 0x3d,
	0x79, 0x86, 0x5b, 0xf7, 0xe4, 0x55, 0xf1, 0x9b, 0x5e, 0x9a, 0x93, 0x99, 0xa2, 0xe7, 0xe9, 0x12,
	0x04, 0xd7, 0x2e, 0xa4, 0xcc, 0xc5, 0xe2, 0x58, 0x5a, 0x92, 0x21, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1,
	0x6d, 0xc4, 0xa9, 0x97, 0x52, 0x92, 0xaf, 0x07, 0x12, 0x70, 0x62, 0x01, 0x99, 0x18, 0x04, 0x96,
	0x74, 0x72, 0xb8, 0xf0, 0x50, 0x8e, 0xe1, 0xc6, 0x43, 0x39, 0x86, 0x0f, 0x0f, 0xe5, 0x18, 0x7f,
	0x3c, 0x94, 0x63, 0x6c, 0x78, 0x24, 0xc7, 0xb8, 0xe2, 0x91, 0x1c, 0xe3, 0x8e, 0x47, 0x72, 0x8c,
	0x07, 0x1e, 0xc9, 0x31, 0x9e, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72,
	0x8c, 0x2f, 0x1e, 0xc9, 0x31, 0x7c, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7,
	0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x24, 0xb1, 0x81, 0xfd, 0x60, 0x0c, 0x08, 0x00, 0x00, 0xff,
	0xff, 0xd6, 0x1f, 0x30, 0x2d, 0x40, 0x01, 0x00, 0x00,
}

func (this *Connect) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Connect)
	if !ok {
		that2, ok := that.(Connect)
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
	if !this.PlayerID.Equal(that1.PlayerID) {
		return false
	}
	if !this.Auth.Equal(&that1.Auth) {
		return false
	}
	return true
}
func (this *Connect) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&dto.Connect{")
	s = append(s, "PlayerID: "+fmt.Sprintf("%#v", this.PlayerID)+",\n")
	s = append(s, "Auth: "+strings.Replace(this.Auth.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringPlayer(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *Connect) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Connect) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Connect) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Auth.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintPlayer(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size := m.PlayerID.Size()
		i -= size
		if _, err := m.PlayerID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintPlayer(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintPlayer(dAtA []byte, offset int, v uint64) int {
	offset -= sovPlayer(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedConnect(r randyPlayer, easy bool) *Connect {
	this := &Connect{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.PlayerID = *v1
	v2 := dto.NewPopulatedAuth(r, easy)
	this.Auth = *v2
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyPlayer interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RunePlayer(r randyPlayer) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringPlayer(r randyPlayer) string {
	v3 := r.Intn(100)
	tmps := make([]rune, v3)
	for i := 0; i < v3; i++ {
		tmps[i] = randUTF8RunePlayer(r)
	}
	return string(tmps)
}
func randUnrecognizedPlayer(r randyPlayer, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldPlayer(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldPlayer(dAtA []byte, r randyPlayer, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(key))
		v4 := r.Int63()
		if r.Intn(2) == 0 {
			v4 *= -1
		}
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(v4))
	case 1:
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulatePlayer(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulatePlayer(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *Connect) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.PlayerID.Size()
	n += 1 + l + sovPlayer(uint64(l))
	l = m.Auth.Size()
	n += 1 + l + sovPlayer(uint64(l))
	return n
}

func sovPlayer(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPlayer(x uint64) (n int) {
	return sovPlayer(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *Connect) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&Connect{`,
		`PlayerID:` + fmt.Sprintf("%v", this.PlayerID) + `,`,
		`Auth:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Auth), "Auth", "dto.Auth", 1), `&`, ``, 1) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringPlayer(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *Connect) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPlayer
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
			return fmt.Errorf("proto: Connect: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Connect: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlayerID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPlayer
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
				return ErrInvalidLengthPlayer
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthPlayer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.PlayerID.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Auth", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPlayer
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
				return ErrInvalidLengthPlayer
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPlayer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Auth.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPlayer(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthPlayer
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthPlayer
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
func skipPlayer(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPlayer
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
					return 0, ErrIntOverflowPlayer
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
					return 0, ErrIntOverflowPlayer
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
				return 0, ErrInvalidLengthPlayer
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPlayer
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPlayer
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPlayer        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPlayer          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPlayer = fmt.Errorf("proto: unexpected end of group")
)
