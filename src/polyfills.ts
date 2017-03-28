// we include the polyfills we require to run Angular applications in most modern browsers.
import 'core-js/es6';
import 'core-js/es7';

require('zone.js/dist/zone');

if(process.env.ENV === 'production'){

} else{
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}