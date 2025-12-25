// Image mapping utility
const imageMap: { [key: string]: string } = {
  'phone-case': 'https://images.unsplash.com/photo-1596933505316-e7f67d75e621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'phone-accessories': 'https://images.unsplash.com/photo-1607070113033-b58e89e4253d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'mobile-protection': 'https://images.unsplash.com/photo-1530271257319-e0cde8f23ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'wireless-earbuds': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'audio-headphones': 'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'earphones-black': 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'power-bank': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'portable-charger': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'battery-pack': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'gaming-keyboard': 'https://images.unsplash.com/photo-1587829191301-62a2b53e59e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'mechanical-keyboard': 'https://images.unsplash.com/photo-1587829191301-62a2b53e59e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'rgb-keyboard': 'https://images.unsplash.com/photo-1595225476933-dff7e9f96dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'gaming-mouse': 'https://images.unsplash.com/photo-1527814050087-3793815479db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'wireless-mouse': 'https://images.unsplash.com/photo-1527814050087-3793815479db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'computer-mouse': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'usb-hub': 'https://images.unsplash.com/photo-1625948515291-4611bbb146b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'usb-c-adapter': 'https://images.unsplash.com/photo-1625948515291-4611bbb146b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'laptop-accessories': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'external-ssd': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'storage-device': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'portable-drive': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'smart-watch': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'fitness-watch': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'wearable-tech': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'bluetooth-speaker': 'https://images.unsplash.com/photo-1589003077984-894e133814c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'portable-speaker': 'https://images.unsplash.com/photo-1589003077984-894e133814c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'wireless-speaker': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'laptop-stand': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'desk-accessories': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'ergonomic-stand': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'webcam': 'https://images.unsplash.com/photo-1598161014881-8a61d8c13330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  '4k-camera': 'https://images.unsplash.com/photo-1598161014881-8a61d8c13330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'video-conference': 'https://images.unsplash.com/photo-1598161014881-8a61d8c13330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'wireless-charger': 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'charging-pad': 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'phone-charger': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
};

export function getProductImage(imageName: string): string {
  // If it's a URL (starts with http), return it as-is (from MongoDB)
  if (imageName && imageName.startsWith('http')) {
    return imageName;
  }
  
  // Otherwise, try to map from the imageMap (fallback for local keys)
  return imageMap[imageName] || imageMap['phone-case'];
}
