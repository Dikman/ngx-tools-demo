import { crc24 } from './crc24.helper';

describe('Crc24 helper', () => {
  // Checksums for samples were generated withhelp https://github.com/latysheff/node-polycrc
  const checks = [
    {
      checksum: 0x24ae91,
      sample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur ipsum ' +
        'ac dictum iaculis. Quisque est est, suscipit vitae sollicitudin nec, ultrices eget erat. In ' +
        'non arcu mattis, tristique mauris eget, commodo ligula. Phasellus vitae vehicula tortor. Etiam ' +
        'a ligula ut orci ullamcorper congue sed at purus. Aenean vestibulum ullamcorper ipsum, a blandit ' +
        'odio porttitor non. Sed efficitur dapibus erat a aliquet. Donec in eleifend libero. In imperdiet ' +
        'dui nec nibh euismod tempor. Phasellus sagittis est consequat neque tincidunt placerat. Aliquam ' +
        'at tellus non mauris malesuada feugiat at accumsan lorem. Maecenas bibendum augue vitae elit ' +
        'pharetra ultrices.'
    },
    {
      checksum: 0xd5d870,
      sample: 'Aliquam laoreet egestas nulla quis fringilla. Ut luctus libero vel pulvinar sagittis. Duis ' +
        'erat augue, posuere euismod pharetra a, posuere a velit. Suspendisse eget libero a nisi gravida ultricies. ' +
        'Vivamus vulputate quis est ut feugiat. Fusce suscipit, tortor ut rhoncus mollis, nunc magna eleifend eros, ' +
        'a elementum lectus magna nec libero. Sed viverra, odio nec scelerisque aliquam, risus tortor ornare tellus, ' +
        'ac egestas nisi tellus vitae urna. Praesent aliquam, massa vel ornare maximus, ante urna rutrum sapien, et ' +
        'pulvinar purus dui sit amet lorem. Nulla feugiat arcu quis elit fringilla faucibus.'
    },
    {
      checksum: 0x1a1659,
      sample: 'Quisque et gravida sapien. Maecenas nec diam sit amet nunc gravida sollicitudin. Nullam pretium ' +
        'magna at ex fringilla laoreet. Fusce eget pharetra orci. Curabitur euismod lorem vitae eleifend dignissim. ' +
        'Nulla in varius odio, ut laoreet odio. Curabitur in nisi libero. Praesent bibendum semper velit vel porta. ' +
        'In diam felis, fringilla sed sollicitudin eu, ullamcorper nec ipsum. Duis vel facilisis velit, non cursus sem. ' +
        'Phasellus varius, turpis eget molestie facilisis, mauris odio congue enim, non bibendum odio augue sed magna. ' +
        'Aenean at risus purus. Duis at turpis urna. Aenean mauris odio, viverra pellentesque leo eu, hendrerit ' +
        'elementum elit. Mauris quis laoreet tortor.'
    },
    {
      checksum: 0x9300c0,
      sample: 'Vestibulum sodales volutpat felis, vel porta est efficitur eget. Praesent consequat aliquam ligula, ' +
        'placerat pretium felis. Praesent iaculis vehicula pulvinar. Donec vitae vulputate ex, quis scelerisque dui. ' +
        'Fusce varius nunc vel cursus aliquam. Proin at sem id nisl maximus tincidunt nec sit amet nulla. Suspendisse ' +
        'egestas augue at purus egestas dignissim. Donec laoreet ex sed purus viverra feugiat. Maecenas id elementum ' +
        'tellus. Nam maximus, sem vitae gravida feugiat, risus est facilisis mauris, pellentesque porttitor nisl libero ' +
        'vitae sem. Sed quam lacus, accumsan in accumsan non, rhoncus sit amet magna. Sed felis odio, ullamcorper sed ' +
        'mauris at, viverra ultrices eros.'
    },
    {
      checksum: 0x380b92,
      sample: 'Proin elementum, enim sed fermentum sollicitudin, velit ex commodo nisi, ut mattis turpis risus ut ' +
        'tellus. Integer scelerisque risus convallis aliquet maximus. Quisque aliquet massa nisl, vitae convallis dui ' +
        'pulvinar nec. Nam vitae aliquam urna. Morbi quis molestie arcu. Sed libero metus, interdum quis metus sit ' +
        'amet, congue porta neque. Quisque volutpat diam et erat mollis convallis. Duis consequat, sem in tristique ' +
        'ullamcorper, turpis nibh tincidunt risus, ac semper ipsum dui et quam. Curabitur elit nulla, tincidunt malesuada ' +
        'risus sed, tristique suscipit nisl. Nulla vehicula, nisl eget tristique pellentesque, magna metus pretium mauris, ' +
        'id bibendum libero ante a sapien. Pellentesque feugiat diam ut vulputate cursus. Donec leo est, vulputate vitae ' +
        'turpis varius, faucibus gravida velit. Ut dictum metus vitae neque faucibus, vel congue erat fringilla.'
    },
    {
      checksum: 0x5f0df0,
      sample: 'Sed accumsan tortor non enim pulvinar lobortis. Integer urna leo, convallis molestie tortor eu, ' +
        'porttitor condimentum lacus. Fusce tincidunt elit diam, sed elementum ante elementum at. Morbi auctor diam ' +
        'non enim dignissim, at tempor ex placerat. Curabitur pharetra sapien nec augue euismod finibus. Ut in lacus ' +
        'leo. Suspendisse et rutrum dui. Nulla ac lectus non velit dictum accumsan. Morbi id lacinia massa. Nam ' +
        'consectetur odio eget ex finibus, eu posuere purus imperdiet. Cras dignissim, tortor eget cursus imperdiet, ' +
        'ante justo faucibus magna, consectetur dictum massa turpis sit amet diam. Sed ultricies tellus metus, eget ' +
        'varius magna sollicitudin vel. Nulla nunc odio, gravida vel risus quis, maximus ornare odio. Suspendisse ' +
        'varius elementum turpis, ac condimentum odio faucibus vel. Aenean id euismod justo, eu tincidunt justo.'
    },
    {
      checksum: 0xe3b9e3,
      sample: 'Proin tempor finibus ante, vel vestibulum leo aliquam vel. Nunc ut mauris elementum, tempor lorem sit ' +
        'amet, lobortis dolor. Pellentesque tincidunt vulputate nulla vel congue. Maecenas lectus tellus, interdum sit ' +
        'amet odio nec, blandit rhoncus lorem. Etiam pharetra quam quis diam semper, eu malesuada tortor dapibus. Fusce ' +
        'finibus lacus eu purus blandit rhoncus. Mauris elit mi, vestibulum at rhoncus mattis, ultricies eget lacus. ' +
        'Duis mi diam, blandit sed placerat ac, rhoncus a velit.'
    },
    {
      checksum: 0xc93877,
      sample: 'Aenean venenatis est porta enim tincidunt, at tincidunt ipsum luctus. In condimentum mollis tristique. ' +
        'Donec ultricies diam nec nibh consectetur maximus. Nulla pellentesque ligula at libero tincidunt, id vestibulum ' +
        'felis lacinia. Sed ullamcorper, lectus in auctor tempus, metus ante finibus mauris, vel euismod quam diam eu ipsum. ' +
        'Morbi sit amet mi ipsum. Nam dictum, ex vitae tempus malesuada, nisi ante laoreet neque, vel porta ante quam nec ' +
        'ante. Donec id faucibus nisl. Duis eu leo malesuada, blandit leo at, scelerisque sem. Sed convallis sagittis erat ' +
        'eu porta. Quisque tempus luctus finibus. Ut non diam elementum, egestas ipsum non, pharetra odio.'
    },
    {
      checksum: 0x216c89,
      sample: 'Fusce consequat euismod varius. Morbi aliquet erat at arcu volutpat ornare id nec risus. Nulla facilisi. ' +
        'Vestibulum sed elit quis nibh vehicula cursus. Sed elit quam, rhoncus a fermentum at, hendrerit at odio. Mauris ' +
        'quis lectus massa. Mauris vitae leo mi. Nulla sem quam, volutpat nec elementum eget, lobortis sit amet tortor. ' +
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nisl sem, dapibus ' +
        'venenatis dapibus tempus, fermentum ut metus. Cras et feugiat ligula. Cras sodales non est id facilisis. Maecenas ' +
        'massa augue, pellentesque non metus a, congue auctor metus.'
    },
    {
      checksum: 0xdb7bfd,
      sample: 'Curabitur nec nisi nisi. Cras gravida felis eu facilisis aliquam. Nullam rhoncus metus ut justo laoreet, ' +
        'quis ornare nisl imperdiet. Suspendisse nec nunc non mi aliquet tincidunt. Praesent orci purus, pretium sed ' +
        'pulvinar id, euismod et ante. Praesent blandit vestibulum rutrum. Donec at fermentum purus, ultricies pharetra ' +
        'tortor. In pellentesque sem turpis, hendrerit facilisis tellus placerat non. Sed urna risus, ullamcorper nec nulla ' +
        'id, tempus congue eros. Nullam id magna et urna porttitor imperdiet sed vitae dolor. Maecenas eu elementum nibh. ' +
        'Nulla id viverra tortor. Curabitur pulvinar augue non mauris ornare commodo. Aliquam nisi sapien, volutpat a ' +
        'placerat at, eleifend vitae ex. Nam ut lectus sed est gravida tristique. Proin nisi mi, lacinia in eleifend at, ' +
        'tempus eu risus.'
    }
  ];

  for (const check of checks) {
    const len = check.sample.length;

    it(`should generate a correct checksum for the fixed sample by ${len} chars`, () => {
      const value = crc24(check.sample);
      expect(value).toBe(check.checksum);
    });
  }
});
