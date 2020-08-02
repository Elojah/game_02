// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: world.proto

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

type World struct {
	ID      github_com_elojah_game_02_pkg_ulid.ID `protobuf:"bytes,1,opt,name=ID,proto3,customtype=github.com/elojah/game_02/pkg/ulid.ID" json:"ID"`
	Dim     geometry.Vec3                         `protobuf:"bytes,2,opt,name=Dim,proto3" json:"Dim"`
	Sectors map[string]uint64                     `protobuf:"bytes,3,rep,name=Sectors,proto3" json:"Sectors" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3"`
}

func (m *World) Reset()      { *m = World{} }
func (*World) ProtoMessage() {}
func (*World) Descriptor() ([]byte, []int) {
	return fileDescriptor_b509c40833d40ff2, []int{0}
}
func (m *World) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *World) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_World.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *World) XXX_Merge(src proto.Message) {
	xxx_messageInfo_World.Merge(m, src)
}
func (m *World) XXX_Size() int {
	return m.Size()
}
func (m *World) XXX_DiscardUnknown() {
	xxx_messageInfo_World.DiscardUnknown(m)
}

var xxx_messageInfo_World proto.InternalMessageInfo

func (m *World) GetDim() geometry.Vec3 {
	if m != nil {
		return m.Dim
	}
	return geometry.Vec3{}
}

func (m *World) GetSectors() map[string]uint64 {
	if m != nil {
		return m.Sectors
	}
	return nil
}

func init() {
	proto.RegisterType((*World)(nil), "space.World")
	proto.RegisterMapType((map[string]uint64)(nil), "space.World.SectorsEntry")
}

func init() { proto.RegisterFile("world.proto", fileDescriptor_b509c40833d40ff2) }

var fileDescriptor_b509c40833d40ff2 = []byte{
	// 333 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2e, 0xcf, 0x2f, 0xca,
	0x49, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x2d, 0x2e, 0x48, 0x4c, 0x4e, 0x95, 0xd2,
	0x4d, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x4f, 0xcf, 0x4f, 0xcf, 0xd7,
	0x07, 0xcb, 0x26, 0x95, 0xa6, 0x81, 0x79, 0x60, 0x0e, 0x98, 0x05, 0xd1, 0x25, 0x65, 0x8a, 0xa4,
	0x3c, 0x35, 0x27, 0x3f, 0x2b, 0x31, 0x43, 0x3f, 0x3d, 0x31, 0x37, 0x35, 0xde, 0xc0, 0x48, 0xbf,
	0x20, 0x3b, 0x5d, 0x3f, 0x3d, 0x35, 0x3f, 0x37, 0xb5, 0xa4, 0xa8, 0x12, 0xce, 0x80, 0x68, 0x53,
	0x7a, 0xca, 0xc8, 0xc5, 0x1a, 0x0e, 0xb2, 0x5c, 0xc8, 0x96, 0x8b, 0xc9, 0xd3, 0x45, 0x82, 0x51,
	0x81, 0x51, 0x83, 0xc7, 0x49, 0xf7, 0xc4, 0x3d, 0x79, 0x86, 0x5b, 0xf7, 0xe4, 0x55, 0xf1, 0x1b,
	0x5a, 0x9a, 0x93, 0x99, 0xa2, 0xe7, 0xe9, 0x12, 0xc4, 0xe4, 0xe9, 0x22, 0xa4, 0xc6, 0xc5, 0xec,
	0x92, 0x99, 0x2b, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x6d, 0xc4, 0xa7, 0x07, 0xb7, 0x26, 0x2c, 0x35,
	0xd9, 0xd8, 0x89, 0x05, 0x64, 0x5e, 0x10, 0x48, 0x81, 0x90, 0x25, 0x17, 0x7b, 0x70, 0x6a, 0x72,
	0x49, 0x7e, 0x51, 0xb1, 0x04, 0xb3, 0x02, 0xb3, 0x06, 0xb7, 0x91, 0xa4, 0x1e, 0xd8, 0xbf, 0x7a,
	0x60, 0x57, 0xe8, 0x41, 0xe5, 0x5c, 0xf3, 0x4a, 0x8a, 0x2a, 0xa1, 0xda, 0x60, 0xea, 0xa5, 0xac,
	0xb8, 0x78, 0x90, 0xa5, 0x85, 0x04, 0xb8, 0x98, 0xb3, 0x53, 0x2b, 0xc1, 0x4e, 0xe6, 0x0c, 0x02,
	0x31, 0x85, 0x44, 0xb8, 0x58, 0xcb, 0x12, 0x73, 0x4a, 0x53, 0xc1, 0xce, 0x60, 0x09, 0x82, 0x70,
	0xac, 0x98, 0x2c, 0x18, 0x9d, 0x1c, 0x2e, 0x3c, 0x94, 0x63, 0xb8, 0xf1, 0x50, 0x8e, 0xe1, 0xc3,
	0x43, 0x39, 0xc6, 0x1f, 0x0f, 0xe5, 0x18, 0x1b, 0x1e, 0xc9, 0x31, 0xae, 0x78, 0x24, 0xc7, 0xb8,
	0xe3, 0x91, 0x1c, 0xe3, 0x81, 0x47, 0x72, 0x8c, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7,
	0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x8b, 0x47, 0x72, 0x0c, 0x1f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c,
	0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x49, 0x6c, 0xe0, 0x00, 0x33, 0x06,
	0x04, 0x00, 0x00, 0xff, 0xff, 0xc8, 0xd5, 0xb1, 0x5d, 0xac, 0x01, 0x00, 0x00,
}

func (this *World) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*World)
	if !ok {
		that2, ok := that.(World)
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
	if !this.Dim.Equal(&that1.Dim) {
		return false
	}
	if len(this.Sectors) != len(that1.Sectors) {
		return false
	}
	for i := range this.Sectors {
		if this.Sectors[i] != that1.Sectors[i] {
			return false
		}
	}
	return true
}
func (this *World) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 7)
	s = append(s, "&space.World{")
	s = append(s, "ID: "+fmt.Sprintf("%#v", this.ID)+",\n")
	s = append(s, "Dim: "+strings.Replace(this.Dim.GoString(), `&`, ``, 1)+",\n")
	keysForSectors := make([]string, 0, len(this.Sectors))
	for k, _ := range this.Sectors {
		keysForSectors = append(keysForSectors, k)
	}
	github_com_gogo_protobuf_sortkeys.Strings(keysForSectors)
	mapStringForSectors := "map[string]uint64{"
	for _, k := range keysForSectors {
		mapStringForSectors += fmt.Sprintf("%#v: %#v,", k, this.Sectors[k])
	}
	mapStringForSectors += "}"
	if this.Sectors != nil {
		s = append(s, "Sectors: "+mapStringForSectors+",\n")
	}
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringWorld(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *World) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *World) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *World) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Sectors) > 0 {
		for k := range m.Sectors {
			v := m.Sectors[k]
			baseI := i
			i = encodeVarintWorld(dAtA, i, uint64(v))
			i--
			dAtA[i] = 0x10
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintWorld(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintWorld(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x1a
		}
	}
	{
		size, err := m.Dim.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintWorld(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size := m.ID.Size()
		i -= size
		if _, err := m.ID.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintWorld(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintWorld(dAtA []byte, offset int, v uint64) int {
	offset -= sovWorld(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func NewPopulatedWorld(r randyWorld, easy bool) *World {
	this := &World{}
	v1 := github_com_elojah_game_02_pkg_ulid.NewPopulatedID(r)
	this.ID = *v1
	v2 := geometry.NewPopulatedVec3(r, easy)
	this.Dim = *v2
	if r.Intn(5) != 0 {
		v3 := r.Intn(10)
		this.Sectors = make(map[string]uint64)
		for i := 0; i < v3; i++ {
			v4 := randStringWorld(r)
			this.Sectors[v4] = uint64(uint64(r.Uint32()))
		}
	}
	if !easy && r.Intn(10) != 0 {
	}
	return this
}

type randyWorld interface {
	Float32() float32
	Float64() float64
	Int63() int64
	Int31() int32
	Uint32() uint32
	Intn(n int) int
}

func randUTF8RuneWorld(r randyWorld) rune {
	ru := r.Intn(62)
	if ru < 10 {
		return rune(ru + 48)
	} else if ru < 36 {
		return rune(ru + 55)
	}
	return rune(ru + 61)
}
func randStringWorld(r randyWorld) string {
	v5 := r.Intn(100)
	tmps := make([]rune, v5)
	for i := 0; i < v5; i++ {
		tmps[i] = randUTF8RuneWorld(r)
	}
	return string(tmps)
}
func randUnrecognizedWorld(r randyWorld, maxFieldNumber int) (dAtA []byte) {
	l := r.Intn(5)
	for i := 0; i < l; i++ {
		wire := r.Intn(4)
		if wire == 3 {
			wire = 5
		}
		fieldNumber := maxFieldNumber + r.Intn(100)
		dAtA = randFieldWorld(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}
func randFieldWorld(dAtA []byte, r randyWorld, fieldNumber int, wire int) []byte {
	key := uint32(fieldNumber)<<3 | uint32(wire)
	switch wire {
	case 0:
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(key))
		v6 := r.Int63()
		if r.Intn(2) == 0 {
			v6 *= -1
		}
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(v6))
	case 1:
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	case 2:
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(key))
		ll := r.Intn(100)
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(ll))
		for j := 0; j < ll; j++ {
			dAtA = append(dAtA, byte(r.Intn(256)))
		}
	default:
		dAtA = encodeVarintPopulateWorld(dAtA, uint64(key))
		dAtA = append(dAtA, byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)), byte(r.Intn(256)))
	}
	return dAtA
}
func encodeVarintPopulateWorld(dAtA []byte, v uint64) []byte {
	for v >= 1<<7 {
		dAtA = append(dAtA, uint8(uint64(v)&0x7f|0x80))
		v >>= 7
	}
	dAtA = append(dAtA, uint8(v))
	return dAtA
}
func (m *World) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ID.Size()
	n += 1 + l + sovWorld(uint64(l))
	l = m.Dim.Size()
	n += 1 + l + sovWorld(uint64(l))
	if len(m.Sectors) > 0 {
		for k, v := range m.Sectors {
			_ = k
			_ = v
			mapEntrySize := 1 + len(k) + sovWorld(uint64(len(k))) + 1 + sovWorld(uint64(v))
			n += mapEntrySize + 1 + sovWorld(uint64(mapEntrySize))
		}
	}
	return n
}

func sovWorld(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozWorld(x uint64) (n int) {
	return sovWorld(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *World) String() string {
	if this == nil {
		return "nil"
	}
	keysForSectors := make([]string, 0, len(this.Sectors))
	for k, _ := range this.Sectors {
		keysForSectors = append(keysForSectors, k)
	}
	github_com_gogo_protobuf_sortkeys.Strings(keysForSectors)
	mapStringForSectors := "map[string]uint64{"
	for _, k := range keysForSectors {
		mapStringForSectors += fmt.Sprintf("%v: %v,", k, this.Sectors[k])
	}
	mapStringForSectors += "}"
	s := strings.Join([]string{`&World{`,
		`ID:` + fmt.Sprintf("%v", this.ID) + `,`,
		`Dim:` + strings.Replace(strings.Replace(fmt.Sprintf("%v", this.Dim), "Vec3", "geometry.Vec3", 1), `&`, ``, 1) + `,`,
		`Sectors:` + mapStringForSectors + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringWorld(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *World) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWorld
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
			return fmt.Errorf("proto: World: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: World: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ID", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorld
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
				return ErrInvalidLengthWorld
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthWorld
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
				return fmt.Errorf("proto: wrong wireType = %d for field Dim", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorld
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
				return ErrInvalidLengthWorld
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthWorld
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Dim.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sectors", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWorld
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
				return ErrInvalidLengthWorld
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthWorld
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Sectors == nil {
				m.Sectors = make(map[string]uint64)
			}
			var mapkey string
			var mapvalue uint64
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowWorld
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
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowWorld
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthWorld
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthWorld
					}
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowWorld
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
					skippy, err := skipWorld(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if skippy < 0 {
						return ErrInvalidLengthWorld
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Sectors[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipWorld(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthWorld
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthWorld
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
func skipWorld(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowWorld
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
					return 0, ErrIntOverflowWorld
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
					return 0, ErrIntOverflowWorld
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
				return 0, ErrInvalidLengthWorld
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupWorld
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthWorld
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthWorld        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowWorld          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupWorld = fmt.Errorf("proto: unexpected end of group")
)
