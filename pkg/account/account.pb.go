// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/pkg/account/account.proto

package account

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

type A struct {
	ID       github_com_elojah_game_02_pkg_ulid.ID  `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	Email    string                                 `protobuf:"bytes,2,opt,name=Email,proto3" json:"Email,omitempty"`
	Password []byte                                 `protobuf:"bytes,3,opt,name=Password,proto3" json:"Password,omitempty"`
	Alias    string                                 `protobuf:"bytes,4,opt,name=Alias,proto3" json:"Alias,omitempty"`
	Token    *github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,5,opt,name=Token,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"Token,omitempty"`
	Room     *github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,6,opt,name=Room,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"Room,omitempty"`
}

func (m *A) Reset()      { *m = A{} }
func (*A) ProtoMessage() {}
func (*A) Descriptor() ([]byte, []int) {
	return fileDescriptor_024198a14ee71f06, []int{0}
}
func (m *A) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *A) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_A.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *A) XXX_Merge(src proto.Message) {
	xxx_messageInfo_A.Merge(m, src)
}
func (m *A) XXX_Size() int {
	return m.Size()
}
func (m *A) XXX_DiscardUnknown() {
	xxx_messageInfo_A.DiscardUnknown(m)
}

var xxx_messageInfo_A proto.InternalMessageInfo

func (m *A) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *A) GetPassword() []byte {
	if m != nil {
		return m.Password
	}
	return nil
}

func (m *A) GetAlias() string {
	if m != nil {
		return m.Alias
	}
	return ""
}

func init() {
	proto.RegisterType((*A)(nil), "account.A")
}

func init() {
	proto.RegisterFile("github.com/elojah/game_02/pkg/account/account.proto", fileDescriptor_024198a14ee71f06)
}

var fileDescriptor_024198a14ee71f06 = []byte{
	// 296 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x32, 0x4e, 0xcf, 0x2c, 0xc9,
	0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcd, 0xc9, 0xcf, 0x4a, 0xcc, 0xd0, 0x4f, 0x4f,
	0xcc, 0x4d, 0x8d, 0x37, 0x30, 0xd2, 0x2f, 0xc8, 0x4e, 0xd7, 0x4f, 0x4c, 0x4e, 0xce, 0x2f, 0xcd,
	0x2b, 0x81, 0xd1, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0xec, 0x50, 0xae, 0x94, 0x2e, 0x92,
	0xee, 0xf4, 0xfc, 0xf4, 0x7c, 0x7d, 0xb0, 0x7c, 0x52, 0x69, 0x1a, 0x98, 0x07, 0xe6, 0x80, 0x59,
	0x10, 0x7d, 0x4a, 0x93, 0x98, 0xb8, 0x18, 0x1d, 0x85, 0x6c, 0xb9, 0x98, 0x3c, 0x5d, 0x24, 0x18,
	0x15, 0x18, 0x35, 0x78, 0x9c, 0x74, 0x4f, 0xdc, 0x93, 0x67, 0xb8, 0x75, 0x4f, 0x5e, 0x15, 0xbf,
	0x33, 0x4a, 0x73, 0x32, 0x53, 0xf4, 0x3c, 0x5d, 0x82, 0x98, 0x3c, 0x5d, 0x84, 0x44, 0xb8, 0x58,
	0x5d, 0x73, 0x13, 0x33, 0x73, 0x24, 0x98, 0x14, 0x18, 0x35, 0x38, 0x83, 0x20, 0x1c, 0x21, 0x29,
	0x2e, 0x8e, 0x80, 0xc4, 0xe2, 0xe2, 0xf2, 0xfc, 0xa2, 0x14, 0x09, 0x66, 0x90, 0xd1, 0x41, 0x70,
	0x3e, 0x48, 0x87, 0x63, 0x4e, 0x66, 0x62, 0xb1, 0x04, 0x0b, 0x44, 0x07, 0x98, 0x23, 0xe4, 0xcc,
	0xc5, 0x1a, 0x92, 0x9f, 0x9d, 0x9a, 0x27, 0xc1, 0x0a, 0x77, 0x09, 0x23, 0xf1, 0x2e, 0x81, 0xe8,
	0x15, 0x72, 0xe4, 0x62, 0x09, 0xca, 0xcf, 0xcf, 0x95, 0x60, 0x23, 0xc7, 0x0c, 0xb0, 0x56, 0x27,
	0x87, 0x0b, 0x0f, 0xe5, 0x18, 0x6e, 0x3c, 0x94, 0x63, 0xf8, 0xf0, 0x50, 0x8e, 0xf1, 0xc7, 0x43,
	0x39, 0xc6, 0x86, 0x47, 0x72, 0x8c, 0x2b, 0x1e, 0xc9, 0x31, 0xee, 0x78, 0x24, 0xc7, 0x78, 0xe0,
	0x91, 0x1c, 0xe3, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0xf8,
	0xe2, 0x91, 0x1c, 0xc3, 0x87, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7,
	0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x12, 0x1b, 0x38, 0x74, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff,
	0x49, 0x30, 0xc0, 0x4b, 0xcc, 0x01, 0x00, 0x00,
}

func (this *A) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*A)
	if !ok {
		that2, ok := that.(A)
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
	if this.Email != that1.Email {
		return false
	}
	if !bytes.Equal(this.Password, that1.Password) {
		return false
	}
	if this.Alias != that1.Alias {
		return false
	}
	if that1.Token == nil {
		if this.Token != nil {
			return false
		}
	} else if !this.Token.Equal(*that1.Token) {
		return false
	}
	if that1.Room == nil {
		if this.Room != nil {
			return false
		}
	} else if !this.Room.Equal(*that1.Room) {
		return false
	}
	return true
}
func (this *A) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 10)
	s = append(s, "&account.A{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Email: "+fmt.Sprintf("%#v", this.Email)+",\n")
	s = append(s, "Password: "+fmt.Sprintf("%#v", this.Password)+",\n")
	s = append(s, "Alias: "+fmt.Sprintf("%#v", this.Alias)+",\n")
	s = append(s, "Token: "+fmt.Sprintf("%#v", this.Token)+",\n")
	s = append(s, "Room: "+fmt.Sprintf("%#v", this.Room)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringAccount(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *A) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *A) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *A) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Room != nil {
		{
			size := m.Room.Size()
			i -= size
			if _, err := m.Room.MarshalTo(dAtA[i:]); err != nil {
				return 0, err
			}
			i = encodeVarintAccount(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if m.Token != nil {
		{
			size := m.Token.Size()
			i -= size
			if _, err := m.Token.MarshalTo(dAtA[i:]); err != nil {
				return 0, err
			}
			i = encodeVarintAccount(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Alias) > 0 {
		i -= len(m.Alias)
		copy(dAtA[i:], m.Alias)
		i = encodeVarintAccount(dAtA, i, uint64(len(m.Alias)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Password) > 0 {
		i -= len(m.Password)
		copy(dAtA[i:], m.Password)
		i = encodeVarintAccount(dAtA, i, uint64(len(m.Password)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Email) > 0 {
		i -= len(m.Email)
		copy(dAtA[i:], m.Email)
		i = encodeVarintAccount(dAtA, i, uint64(len(m.Email)))
		i--
		dAtA[i] = 0x12
	}
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintAccount(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintAccount(dAtA []byte, offset int, v uint64) int {
	offset -= sovAccount(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedA(r randyAccount, easy bool) *A {
	this := &A{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v1
	this.Email = string(randStringAccount(r))
	v2 := r.Intn(100)
	this.Password = make([]byte, v2)
	for i := 0; i < v2; i++ {
		this.Password[i] = byte(r.Intn(256))
	}
	this.Alias = string(randStringAccount(r))
	this.Token = github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.Room = github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyAccount interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneAccount(r randyAccount) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringAccount(r randyAccount) string {
	v3 := r.Intn(100)
	tmps := make([]rune, v3)
	for i := 0; i < v3; i++ {
		tmps[i] = randUTF8RuneAccount(r)
	}
	return string(tmps)
}
func randUnrecognizedAccount(r randyAccount, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldAccount(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldAccount(dAtA []byte, r randyAccount, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(key))
		v4 := r.Int63()
		if r.Intn(2) == 0 {
			v4 *= -1
		}
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(v4))
	case 1:
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateAccount(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateAccount(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *A) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovAccount(uint64(l))
	l = len(m.Email)
	if l > 0 {
		n += 1 + l + sovAccount(uint64(l))
	}
	l = len(m.Password)
	if l > 0 {
		n += 1 + l + sovAccount(uint64(l))
	}
	l = len(m.Alias)
	if l > 0 {
		n += 1 + l + sovAccount(uint64(l))
	}
	if m.Token != nil {
		l = m.Token.Size()
		n += 1 + l + sovAccount(uint64(l))
	}
	if m.Room != nil {
		l = m.Room.Size()
		n += 1 + l + sovAccount(uint64(l))
	}
	return n
}

func sovAccount(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAccount(x uint64) (n int) {
	return sovAccount(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *A) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&A{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Email:` + fmt.Sprintf("%v", this.Email) + `,`,
		`Password:` + fmt.Sprintf("%v", this.Password) + `,`,
		`Alias:` + fmt.Sprintf("%v", this.Alias) + `,`,
		`Token:` + fmt.Sprintf("%v", this.Token) + `,`,
		`Room:` + fmt.Sprintf("%v", this.Room) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringAccount(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *A) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAccount
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
			return fmt.Errorf("proto: A: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: A: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
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
				return fmt.Errorf("proto: wrong wireType = %d for field Email", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Email = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Password", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
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
				return fmt.Errorf("proto: wrong wireType = %d for field Alias", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Alias = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Token", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			var v github_com_elojah_game_02_pkg_ulid.ID
			m.Token = &v
			if err := m.Token.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Room", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
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
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			var v github_com_elojah_game_02_pkg_ulid.ID
			m.Room = &v
			if err := m.Room.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAccount(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthAccount
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthAccount
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
func skipAccount(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAccount
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
					return 0, ErrIntOverflowAccount
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
					return 0, ErrIntOverflowAccount
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
				return 0, ErrInvalidLengthAccount
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAccount
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAccount
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAccount        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAccount          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAccount = fmt.Errorf("proto: unexpected end of group")
)
