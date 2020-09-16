// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/space/dto/sector.proto

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

type ListSector struct {
	Auth dto.Auth                                `protobuf:"bytes,1,opt,name=Auth,proto3" json:"Auth"`
	IDs  []github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,2,rep,name=IDs,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"IDs"`
}

func (m *ListSector) Reset()      { *m = ListSector{} }
func (*ListSector) ProtoMessage() {}
func (*ListSector) Descriptor() ([]byte, []int) {
	return fileDescriptor_4a4d7d4a74309654, []int{0}
}
func (m *ListSector) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ListSector) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ListSector.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ListSector) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListSector.Merge(m, src)
}
func (m *ListSector) XXX_Size() int {
	return m.Size()
}
func (m *ListSector) XXX_DiscardUnknown() {
	xxx_messageInfo_ListSector.DiscardUnknown(m)
}

var xxx_messageInfo_ListSector proto.InternalMessageInfo

func (m *ListSector) GetAuth() dto.Auth {
	if m != nil {
		return m.Auth
	}
	return dto.Auth{}
}

func init() {
	proto.RegisterType((*ListSector)(nil), "dto.ListSector")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/space/dto/sector.proto", fileDescriptor_4a4d7d4a74309654)
}

var fileDescriptor_4a4d7d4a74309654 = []byte{
	// 274 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x32, 0x49, 0xcf, 0x2c, 0xc9,
	0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcd, 0xc9, 0xcf, 0x4a, 0xcc, 0xd0, 0x4f, 0x4f,
	0xcc, 0x4d, 0x8d, 0x37, 0x30, 0xd2, 0x2f, 0xc8, 0x4e, 0xd7, 0x2f, 0x2e, 0x48, 0x4c, 0x4e, 0xd5,
	0x4f, 0x29, 0xc9, 0xd7, 0x2f, 0x4e, 0x4d, 0x2e, 0xc9, 0x2f, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x62, 0x4e, 0x29, 0xc9, 0x97, 0xd2, 0x45, 0xd2, 0x9a, 0x9e, 0x9f, 0x9e, 0xaf, 0x0f, 0x96,
	0x4b, 0x2a, 0x4d, 0x03, 0xf3, 0xc0, 0x1c, 0x30, 0x0b, 0xa2, 0x47, 0xca, 0x1c, 0xbf, 0x4d, 0x89,
	0xc9, 0xc9, 0xf9, 0xa5, 0x79, 0x25, 0x60, 0xbb, 0xa0, 0x6c, 0x88, 0x46, 0xa5, 0x22, 0x2e, 0x2e,
	0x9f, 0xcc, 0xe2, 0x92, 0x60, 0xb0, 0x03, 0x84, 0x94, 0xb9, 0x58, 0x1c, 0x4b, 0x4b, 0x32, 0x24,
	0x18, 0x15, 0x18, 0x35, 0xb8, 0x8d, 0x38, 0xf5, 0x52, 0x4a, 0xf2, 0xf5, 0x40, 0x02, 0x4e, 0x2c,
	0x27, 0xee, 0xc9, 0x33, 0x04, 0x81, 0x25, 0x85, 0xec, 0xb9, 0x98, 0x3d, 0x5d, 0x8a, 0x25, 0x98,
	0x14, 0x98, 0x35, 0x78, 0x9c, 0x74, 0x41, 0x12, 0xb7, 0xee, 0xc9, 0xab, 0xe2, 0x77, 0x40, 0x69,
	0x4e, 0x66, 0x8a, 0x9e, 0xa7, 0x4b, 0x10, 0x48, 0xa7, 0x93, 0xc3, 0x85, 0x87, 0x72, 0x0c, 0x37,
	0x1e, 0xca, 0x31, 0x7c, 0x78, 0x28, 0xc7, 0xf8, 0xe3, 0xa1, 0x1c, 0x63, 0xc3, 0x23, 0x39, 0xc6,
	0x15, 0x8f, 0xe4, 0x18, 0x77, 0x3c, 0x92, 0x63, 0x3c, 0xf0, 0x48, 0x8e, 0xf1, 0xc4, 0x23, 0x39,
	0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x7c, 0xf1, 0x48, 0x8e, 0xe1, 0xc3, 0x23,
	0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x89,
	0x0d, 0xec, 0x78, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xea, 0x4e, 0x35, 0x21, 0x61, 0x01,
	0x00, 0x00,
}

func (this *ListSector) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ListSector)
	if !ok {
		that2, ok := that.(ListSector)
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
func (this *ListSector) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&dto.ListSector{")
	s = append(s, "Auth: "+strings.Replace(this.Auth.GoString(), `&`, ``, 1)+",\n")
	s = append(s, "IDs: "+fmt.Sprintf("%#v", this.IDs)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringSector(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *ListSector) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ListSector) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ListSector) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
				i = encodeVarintSector(dAtA, i, uint64(size))
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
		i = encodeVarintSector(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintSector(dAtA []byte, offset int, v uint64) int {
	offset -= sovSector(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedListSector(r randySector, easy bool) *ListSector {
	this := &ListSector{}
	v1 := dto.NewPopulatedAuth(r, easy)
	this.Auth = *v1
	v2 := r.Intn(10)
	this.IDs = make([]github_com_elojah_game_02_pkg_ulid.ID, v2)
	for i := 0; i < v2; i++ {
		v3 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
		this.IDs[i] = *v3
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randySector interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneSector(r randySector) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringSector(r randySector) string {
	v4 := r.Intn(100)
	tmps := make([]rune, v4)
	for i := 0; i < v4; i++ {
		tmps[i] = randUTF8RuneSector(r)
	}
	return string(tmps)
}
func randUnrecognizedSector(r randySector, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldSector(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldSector(dAtA []byte, r randySector, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateSector(dAtA, uint64(key))
		v5 := r.Int63()
		if r.Intn(2) == 0 {
			v5 *= -1
		}
		dAtA = encodeVarintPopulateSector(dAtA, uint64(v5))
	case 1:
		dAtA = encodeVarintPopulateSector(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateSector(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateSector(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateSector(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateSector(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *ListSector) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Auth.Size()
	n += 1 + l + sovSector(uint64(l))
	if len(m.IDs) > 0 {
		for _, e := range m.IDs {
			l = e.Size()
			n += 1 + l + sovSector(uint64(l))
		}
	}
	return n
}

func sovSector(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSector(x uint64) (n int) {
	return sovSector(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *ListSector) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&ListSector{`,
		`Auth:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Auth), "Auth", "dto.Auth", 1), `&`, ``, 1) + `,`,
		`IDs:` + fmt.Sprintf("%v", this.IDs) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringSector(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *ListSector) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSector
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
			return fmt.Errorf("proto: ListSector: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ListSector: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Auth", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSector
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
				return ErrInvalidLengthSector
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSector
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
					return ErrIntOverflowSector
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
				return ErrInvalidLengthSector
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSector
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
			skippy, err := skipSector(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthSector
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthSector
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
func skipSector(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSector
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
					return 0, ErrIntOverflowSector
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
					return 0, ErrIntOverflowSector
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
				return 0, ErrInvalidLengthSector
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSector
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSector
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSector        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSector          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSector = fmt.Errorf("proto: unexpected end of group")
)
